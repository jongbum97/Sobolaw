package com.sobolaw.feign.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notification {

    private long memberId;
    private String title;
    private String body;

}
