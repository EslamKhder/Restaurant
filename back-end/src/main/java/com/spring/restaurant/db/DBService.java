package com.spring.restaurant.db;

import com.spring.restaurant.deo.AuthoritiesRepository;
import com.spring.restaurant.deo.UserRepository;
import com.spring.restaurant.model.Authorities;
import com.spring.restaurant.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class DBService implements CommandLineRunner {

    private UserRepository userRepository;
    private AuthoritiesRepository authoritiesRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public DBService(UserRepository userRepository, AuthoritiesRepository authoritiesRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.authoritiesRepository = authoritiesRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        /*User user = new User();
        user.setEmail("ahmed@gmail.com");
        user.setPassword(passwordEncoder.encode("678910"));
        user.setActive(1);
        List<Authorities> authorities = authoritiesRepository.findAll();
        user.getAuthorities().add(authorities.get(0));
        user.getAuthorities().add(authorities.get(1));
        userRepository.save(user);*/
    }
}
