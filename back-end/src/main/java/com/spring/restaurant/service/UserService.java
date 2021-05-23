package com.spring.restaurant.service;

import com.spring.restaurant.deo.UserRepository;
import com.spring.restaurant.dto.JwtLogin;
import com.spring.restaurant.dto.UserPrincipal;
import com.spring.restaurant.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        System.out.println(user.getEmail() + "         " +user.getPassword());
        UserPrincipal userPrincipal = new UserPrincipal(user);
        return userPrincipal;
    }

    @Transactional
    public void addUser(User user){
        userRepository.save(user);
    }

    public boolean ifEmailExist(String email){
        return userRepository.existsByEmail(email);
    }

    @Transactional
    public int getUserActive(String email){
        return userRepository.getActive(email);
    }

    @Transactional
    public String getPasswordByEmail(String email){
        return userRepository.getPasswordByEmail(email);
    }

    public User getUserByMail(String mail){
        return this.userRepository.findByEmail(mail);
    }
    public void editUser(User user){
        this.userRepository.save(user);
    }
}
