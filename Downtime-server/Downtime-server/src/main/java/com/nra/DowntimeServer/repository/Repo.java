package com.nra.DowntimeServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nra.DowntimeServer.models.Threshold;

public interface Repo  extends JpaRepository<Threshold,Integer>{
	
	@Query(
		value="select * from threshold t order by t.id desc limit 1 ",
		nativeQuery = true
	)
	Threshold findOrderById();

}
