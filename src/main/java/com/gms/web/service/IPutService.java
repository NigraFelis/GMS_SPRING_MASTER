package com.gms.web.service;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IPutService {
	public List<?> execute(Object o);

}
