package com.sobolaw.api.statute.controller;

import com.sobolaw.api.common.response.BaseResponse;
import com.sobolaw.api.statute.dto.StatuteDTO;
import com.sobolaw.api.statute.service.StatuteSearchService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/statutes")
@Tag(name = "StatuteController", description = "법령 관련 기능")
@RequiredArgsConstructor
public class StatuteController {

    private final StatuteSearchService statuteSearchService;

    @GetMapping("/search/{searchKeyword}")
    @Operation(summary = "법령 검색", description = "키워드를 사용하여 법령 타이틀을 검색합니다.")
    public BaseResponse<List<StatuteDTO>> searchStatutes(@PathVariable String searchKeyword) throws Exception {
        List<StatuteDTO> searchResults = statuteSearchService.searchByKeyword(searchKeyword);
        return BaseResponse.success(HttpStatus.OK.value(), "법령 검색 성공!", searchResults);
    }
}