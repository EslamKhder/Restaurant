package com.company;

import com.company.oop1.Client;
import com.company.oop1.Student;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Client c = new Client();
        c.setId(50);
        System.out.println(c.getId());
        c.getData();
        Student s = new Student();
        s.getData();

    }
}
