package com.aleksandar.portfolio.repository;

import com.aleksandar.portfolio.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interfejs za Contact entitet
 * 
 * @author Aleksandar Janković
 * @version 1.0
 */
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

    /**
     * Pronalazi sve kontakt poruke sortirane po datumu kreiranja (najnovije prvo)
     */
    List<Contact> findAllByOrderByCreatedAtDesc();

    /**
     * Pronalazi sve nepročitane kontakt poruke
     */
    List<Contact> findByIsReadFalse();

    /**
     * Pronalazi kontakt poruke po email adresi
     */
    List<Contact> findByEmailOrderByCreatedAtDesc(String email);

    /**
     * Broji nepročitane kontakt poruke
     */
    long countByIsReadFalse();
}
