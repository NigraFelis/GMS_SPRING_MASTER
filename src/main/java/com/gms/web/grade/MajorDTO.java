package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Lazy @Component @Data
public class MajorDTO {
	private String majorId,title, id, subjId;
}
