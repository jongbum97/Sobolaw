package com.sobolaw.api.precedent.repository;

import com.sobolaw.api.precedent.entity.Precedent;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrecedentRepository extends JpaRepository<Precedent, Long> {

    Optional<Precedent> findByPrecedentId(Long precedentId);

    List<Precedent> findByPrecedentIdIn(List<Long> precedentIds);

    List<Precedent> findTop20ByOrderByHitDesc();

}
