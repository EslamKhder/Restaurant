package com.spring.restaurant.controller;

import com.spring.restaurant.dto.*;
import com.spring.restaurant.model.Code;
import com.spring.restaurant.model.User;
import com.spring.restaurant.service.AuthoritiesService;
import com.spring.restaurant.service.EmailService;
import com.spring.restaurant.service.TokenService;
import com.spring.restaurant.service.UserService;
import com.spring.restaurant.util.UserCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

// http://localhost:8080/
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping
// http://localhost:8080/
public class UserController {

    private TokenService tokenService;
    private UserService userService;
    private AuthoritiesService authoritiesService;
    private PasswordEncoder passwordEncoder;
    private EmailService emailService;
    private UserCode userCode = new UserCode();

    @Autowired
    public UserController(TokenService tokenService, UserService userService, AuthoritiesService authoritiesService, PasswordEncoder passwordEncoder, EmailService emailService,PasswordEncoder encoder) {
        this.tokenService = tokenService;
        this.userService = userService;
        this.authoritiesService = authoritiesService;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
        this.userCode = userCode;
    }

    // http://localhost:8080/signin
    @PostMapping("/signin")
    public LoginResponse logIn(@RequestBody JwtLogin jwtLogin){
        return tokenService.login(jwtLogin);
    }


    // http://localhost:8080/sigup
    @PostMapping("/signup")
    public AccountResponse createUser(@RequestBody JwtLogin jwtLogin){
        AccountResponse accountResponse = new AccountResponse();
        boolean result = userService.ifEmailExist(jwtLogin.getEmail());
        if(result){
            accountResponse.setResult(0);
        } else {
            String myCode = userCode.getCode();
            User user = new User();
            user.setEmail(jwtLogin.getEmail());
            user.setPassword(passwordEncoder.encode(jwtLogin.getPassword()));
            user.setActive(0);
            user.getAuthorities().add(authoritiesService.getAuthorities().get(0));
            Mail mail = new Mail(jwtLogin.getEmail(),myCode);
            emailService.sendCodeByMail(mail);
            Code code = new Code();
            code.setCode(myCode);
            user.setCode(code);
            userService.addUser(user);
            accountResponse.setResult(1);
        }
        return accountResponse;
    }

    // http://localhost:8080/active
    @PostMapping("/active")
    public UserActive getActiveUser(@RequestBody JwtLogin jwtLogin){
        String enPassword = userService.getPasswordByEmail(jwtLogin.getEmail());  // from DB
        boolean result = passwordEncoder.matches(jwtLogin.getPassword(),enPassword); // Sure
        UserActive userActive = new UserActive();
        if (result){
            int act = userService.getUserActive(jwtLogin.getEmail());
            userActive.setActive(act);
        } else {
            userActive.setActive(-1);
        }
        return userActive;
    }
}
