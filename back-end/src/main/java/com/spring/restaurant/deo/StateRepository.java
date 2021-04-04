package com.spring.restaurant.deo;

import com.spring.restaurant.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepository extends JpaRepository<State,Long> {

    public List<State> findByCountryCode(String Code);
}
