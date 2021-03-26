package com.spring.restaurant.config;

import com.spring.restaurant.model.Category;
import com.spring.restaurant.model.Order;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class DataRestApiConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] preventMethod = {HttpMethod.GET,HttpMethod.POST,HttpMethod.PUT,HttpMethod.DELETE};
        config.getExposureConfiguration()
              .forDomainType(Category.class)
              .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)))
              .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(preventMethod));

        config.getExposureConfiguration()
                .forDomainType(Order.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(preventMethod)))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(preventMethod));

    }
}