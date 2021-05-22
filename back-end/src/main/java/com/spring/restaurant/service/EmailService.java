package com.spring.restaurant.service;

import com.spring.restaurant.dto.Mail;

public interface EmailService {

    public void sendCodeByMail(Mail mail);
}
