package web.nl.kltn.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import web.nl.kltn.mapper.generator.ThesisStudentMapper;
import web.nl.kltn.model.dto.ThesisStudentDTO;
import web.nl.kltn.model.generator.ThesisStudent;

@Service
@Transactional(rollbackFor = Throwable.class)
public class ThesisStudentServiceImpl {

}
