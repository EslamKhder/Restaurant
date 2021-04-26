package com.company;


import com.company.opp1.Employee;
import com.company.opp1.MyInterface;

import javax.swing.text.Keymap;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.*;

public class Main {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {

        Employee e = new Employee();
        MyInterface me = new Employee();

        Scanner scanner = new Scanner(System.in);
        // HashMap *Hashtable*TreeMap*LinkedHashMap
        //

        //HashMap<String,String> myMaps = new HashMap<>();
        HashMap<String,String> myMaps = new HashMap<>();
        for (int i=0;i<3;i++){
            String key = scanner.next();
            String value = scanner.next();
            myMaps.put(key,value);
        }
        System.out.println(myMaps);
    }
}
