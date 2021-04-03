package com.company.oop1;

public class User {

    private int id;
    private String name;

    // encapsulation
   public void setId(int myId){
       if(myId <= 0){
           System.out.println("invaid");
       } else {
           id = myId;
       }

    }
    public int getId(){
        return id;
    }

}
