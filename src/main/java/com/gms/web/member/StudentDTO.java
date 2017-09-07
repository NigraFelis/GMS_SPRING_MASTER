package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Lazy @Component @Data
public class StudentDTO {
	private String num,id,name,ssn,
		regdate,phone,email,subjects;
}
