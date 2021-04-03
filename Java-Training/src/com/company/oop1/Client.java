package com.company.oop1;

public class Client extends Person {

    private String salary;

    @Override
    public void setId(int id){
        super.setId(id);
    }

    @Override
    public int getId(){
        return super.getId();
    }

    @Override
    public void getData(){
        System.out.println("My Data in Client");
    }

}
