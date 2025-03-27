package com.foodordering.payment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PaymentServiceApplication {

	public static void main(String[] args) {
		System.out.println("Payment Service Started");
		SpringApplication.run(PaymentServiceApplication.class, args);
	}

}