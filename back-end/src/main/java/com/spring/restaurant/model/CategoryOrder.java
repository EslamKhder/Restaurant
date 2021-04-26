package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;

// Id
// name
@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class CategoryOrder extends BaseEntity{

    @Column(name = "data_create")
    @CreationTimestamp
    private Date dataCreate;

    @Column(name = "data_update")
    @UpdateTimestamp
    private Date dataUpdate;

// @CreationTimestamp @UpdateTimestamp
}
