package com.spring.restaurant.controller;

import com.spring.restaurant.model.State;
import com.spring.restaurant.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// http://localhost:8080/api
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class StateController {
    private StateService stateService;

    @Autowired
    public StateController(StateService stateService) {
        this.stateService = stateService;
    }

    // http://localhost:8080/api/states
    @GetMapping("/states")
    public List<State> getStates(){
        return stateService.getAllStates();
    }
}
