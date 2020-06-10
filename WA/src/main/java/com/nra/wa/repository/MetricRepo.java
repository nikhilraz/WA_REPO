package com.nra.wa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nra.wa.models.Status;

public interface MetricRepo extends JpaRepository<Status, Integer>{

	@Query(
			value="select count(*) from (select * from status s order by s.id desc limit 10)  t where t.status=500",
			nativeQuery = true
			)
	int findTop10OrderById();

}
