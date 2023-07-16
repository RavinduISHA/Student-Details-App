package com.ravindu.CRUD_App.repository;

import com.ravindu.CRUD_App.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
