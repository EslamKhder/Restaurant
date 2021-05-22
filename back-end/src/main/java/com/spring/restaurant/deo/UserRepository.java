package com.spring.restaurant.deo;

import com.spring.restaurant.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public User findByEmail(String email);

    public boolean existsByEmail(String email);

    @Query("select u.active from User u where u.email=?1 and u.password =?2")
    public int getActive(String email,String password);

}
