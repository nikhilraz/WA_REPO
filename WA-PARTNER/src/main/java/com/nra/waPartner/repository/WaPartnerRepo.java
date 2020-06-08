package com.nra.waPartner.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nra.waPartner.models.Book;

public interface WaPartnerRepo extends JpaRepository<Book, Integer>{

	@Query(
		value="select * from Book b where b.author=:author order by b.title  LIMIT :count",
		nativeQuery = true
		)
	List<Book> findTopCountByAuthorOrderByTitle(@Param("author") String author,int count);

	@Modifying
    @Transactional
	@Query(
			value="delete  from Book  where author=:author order by title  LIMIT :count",
			nativeQuery = true
			)
	void deleteTopCountByAuthorOrderByTitle(String author, int count);
	
	
}
