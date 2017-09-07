package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO {
	private String id,name,password,phone,ssn,
		email,profile,birthday,gender,major,regdate;
}
