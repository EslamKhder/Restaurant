package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_code")
public class Code extends BaseEntity {

    @Lob
    @Column(name = "code")
    private String Code;

    @OneToOne(mappedBy = "code")
    private User user;

}
