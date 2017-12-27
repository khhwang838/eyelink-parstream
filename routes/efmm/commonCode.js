function define(name, value) {
  Object.defineProperty(exports, name, {
    value: value,
    enumerable : true,
  });
}

define( "COMMONCODE", {
  "STEP" : [
    {"key" : "NOTCHING", "value" : "Notching"},
    {"key" : "STACKING", "value" : "Stacking"},
    {"key" : "TABWELDING", "value" : "Tab Welding"},
    {"key" : "STACPACKAGINGKING", "value" : "Packaging"},
    {"key" : "DEGASSING", "value" : "Degassing"},
  ],
  "MACHINE" : {
    "TYPE" : [
      {
        "key" : "Motor Parameter (30 Axis)",
        "value" : "Motor Parameter (30 Axis)"
      },
      {
        "key" : "Productive Parameter",
        "value" : "Productive Parameter"
      }
    ],
    "UNIT" : [
      {
        "key" : "mm/sec or degree/sec",
        "value" : "mm/sec or degree/sec"
      },
      {
        "key" : "mm or degree",
        "value" : "mm or degree"
      },
      {
        "key" : "mm",
        "value" : "mm"
      },
      {
        "key" : "ppm",
        "value" : "ppm"
      },
      {
        "key" : "msec",
        "value" : "msec"
      },
      {
        "key" : "Mpa",
        "value" : "Mpa"
      },
      {
        "key" : "count",
        "value" : "count"
      },
      {
        "key" : "cycle",
        "value" : "cycle"
      },
      {
        "key" : "0:미사용/1:사용",
        "value" : "0:미사용/1:사용"
      },
      {
        "key" : "0:왼쪽 / 1:오른쪽",
        "value" : "0:왼쪽 / 1:오른쪽"
      },
      {
        "key" : "0:음극 / 1:양극",
        "value" : "0:음극 / 1:양극"
      },
    ],
    "DATATYPE" : [
      {
        "key" : "Double",
        "value" : "Double"
      },
      {
        "key" : "Short",
        "value" : "Short"
      },
      {
        "key" : "Integer",
        "value" : "Integer"
      }
    ]
  },
  "RULE" : {
      "TYPE" : [
          { "key" : "oee", "value" : "OEE"},
          { "key" : "status", "value" : "STATUS"}
      ],
      "RULENAME" : [
          { "key" : "ooee", "value" : "Overall OEE", "pkey" : "oee"},
          { "key" : "availability", "value" : "Availability", "pkey" : "oee"},
          { "key" : "performance", "value" : "Performance", "pkey" : "oee"},
          { "key" : "quality", "value" : "Quality", "pkey" : "oee"},
          { "key" : "downtime", "value" : "Down Time", "pkey" : "oee"},
          { "key" : "plannedbreaktime", "value" : "Planned Break Time", "pkey" : "oee"},
          { "key" : "down", "value" : "Down", "pkey" : "status"},
          { "key" : "sepa_unwind", "value" : "Sepa Unwind", "pkey" : "status"},
      ],
      "CONDITION" : [
          { "key" : "less", "value" : "<"},
          { "key" : "lesseq", "value" : "<="},
          { "key" : "eq", "value" : "="},
          { "key" : "great", "value" : ">"},
          { "key" : "greateq", "value" : ">="},
      ],
      "ALARMTYPE" : [
          { "key" : "email", "value" : "E-mail"},
          { "key" : "sms", "value" : "SMS"}
      ]
  },
  "ALARM" : {
    "stacking" : {
      "L10000" : "HAL:Ready off(알람0~2000)",
      "L10001" : "HAL:CIM Down",
      "L10002" : "HAL:Main OP 비상정지 발생",
      "L10003" : "HAL:전면부 비상정지 발생",
      "L10004" : "HAL:후면부 비상정지 발생",
      "L10005" : "HAL:??? 비상정지 발생",
      "L10006" : "HAL:",
      "L10007" : "HAL:",
      "L10008" : "HAL:",
      "L10009" : "HAL:",
      "L10010" : "HAL: Door 1 Open",
      "L10011" : "HAL: Door 2 Open",
      "L10012" : "HAL: Door 3 Open",
      "L10013" : "HAL: Door 4 Open",
      "L10014" : "HAL: Door 5 Open",
      "L10015" : "HAL: Door 6 Open",
      "L10016" : "HAL: Door 7 Open",
      "L10017" : "HAL: Door 8 Open",
      "L10018" : "HAL: Door 9 Open",
      "L10019" : "HAL: Door 10 Open",
      "L10020" : "HAL: Door 11 Open",
      "L10021" : "HAL: Door 12Open",
      "L10022" : "HAL: Door 13 Open",
      "L10023" : "HAL: Door 14 Open",
      "L10024" : "HAL:",
      "L10025" : "HAL:",
      "L10026" : "HAL:",
      "L10027" : "HAL:",
      "L10028" : "HAL:",
      "L10029" : "HAL:",
      "L10030" : "HAL:MCCB02 Trip(Servo power)",
      "L10031" : "HAL:CP02 Trip(Vision PC)",
      "L10032" : "HAL:CP13 Trip(SMPS 2)",
      "L10033" : "HAL:CP31 Trip(Analog 5V)",
      "L10034" : "HAL:CP15 Trip(Analog 24V)",
      "L10035" : "HAL:CP34 Trip(Servo panel 1 DC24",
      "L10036" : "HAL:CP36 Trip(Servo panel 1 Brak",
      "L10037" : "HAL:CP35 Trip(Servo panel 2 DC24",
      "L10038" : "HAL:CP37 Trip(Servo panel 2 Brak",
      "L10039" : "HAL:CP15 Trip(Ionizer Bond Dispe",
      "L10040" : "HAL:CP101~107 Trip(Servo panel 1",
      "L10041" : "HAL:CP108~120 Trip(Servo panel 2",
      "L10042" : "HAL:Main Air 이상",
      "L10043" : "HAL:Main 진공 이상",
      "L10044" : "HAL:CP121 Trip(Vacuum Pump)",
      "L10045" : "HAL:CP33 Trip(BCR Power)",
      "L10046" : "HAL:",
      "L10047" : "HAL:",
      "L10048" : "HAL:",
      "L10049" : "HAL:",
      "L10050" : "HAL:A/D Card 알람",
      "L10051" : "HAL:D/A Card 알람",
      "L10052" : "HAL:",
      "L10053" : "HAL:",
      "L10054" : "HAL:",
      "L10055" : "HAL:",
      "L10056" : "HAL:",
      "L10057" : "HAL:",
      "L10058" : "HAL:",
      "L10059" : "HAL:",
      "L10060" : "HAL:진공 Pump trip",
      "L10061" : "HAL:",
      "L10062" : "HAL:",
      "L10063" : "HAL:",
      "L10064" : "HAL:",
      "L10065" : "HAL:",
      "L10066" : "HAL:",
      "L10067" : "HAL:",
      "L10068" : "HAL:",
      "L10069" : "HAL:",
      "L10070" : "HAL:Main Air 이상",
      "L10071" : "HAL:Main 진공 이상",
      "L10072" : "HAL:",
      "L10073" : "HAL:",
      "L10074" : "HAL:",
      "L10075" : "HAL:",
      "L10076" : "HAL:",
      "L10077" : "HAL:",
      "L10078" : "HAL:",
      "L10079" : "HAL:",
      "L10080" : "HAL:",
      "L10081" : "HAL:",
      "L10082" : "HAL:",
      "L10083" : "HAL:",
      "L10084" : "HAL:",
      "L10085" : "HAL:",
      "L10086" : "HAL:",
      "L10087" : "HAL:",
      "L10088" : "HAL:",
      "L10100" : "(-)Mgz_ 1 Cycle Time over",
      "L10101" : "(-)Mgz_",
      "L10102" : "(-)Mgz_",
      "L10103" : "(-)Mgz_",
      "L10104" : "(-)Mgz_ 투입 이송 상승 이상",
      "L10105" : "(-)Mgz_ 투입 이송 하강 이상",
      "L10106" : "(-)Mgz_ 투입 이송 후진 이상",
      "L10107" : "(-)Mgz_ 투입 이송 전진 이상",
      "L10108" : "(-)Mgz_ 배출 이송 상승 이상",
      "L10109" : "(-)Mgz_ 배출 이송 하강 이상",
      "L10110" : "(-)Mgz_ 배출 이송 후진 이상",
      "L10111" : "(-)Mgz_ 배출 이송 전진 이상",
      "L10112" : "(-)Mgz_ EL Lifter 후진 이상",
      "L10113" : "(-)Mgz_ EL Lifter 전진 이상",
      "L10114" : "(-)Mgz_ 오투입 알람",
      "L10115" : "(-)Mgz_ 극판 높이 이상",
      "L10116" : "(-)Mgz_",
      "L10117" : "(-)Mgz_",
      "L10118" : "(-)Mgz_",
      "L10119" : "(-)Mgz_",
      "L10120" : "(-)EL_ 1 Cycle Time over",
      "L10121" : "(-)EL_ 연속 2매 이상",
      "L10122" : "(-)EL_",
      "L10123" : "(-)EL_",
      "L10124" : "(-)EL_ 진공 이상",
      "L10125" : "(-)EL_ 진공 파기 이상",
      "L10126" : "(-)EL_ 극판 소진 센서 설정이상",
      "L10127" : "(-)EL_",
      "L10128" : "(-)EL_",
      "L10129" : "(-)EL_",
      "L10130" : "(-)EL_",
      "L10131" : "(-)EL_",
      "L10132" : "(-)EL_",
      "L10133" : "(-)EL_",
      "L10134" : "(-)EL_",
      "L10135" : "(-)EL_",
      "L10136" : "(-)EL_",
      "L10137" : "(-)EL_",
      "L10138" : "(-)EL_",
      "L10139" : "(-)EL_",
      "L10140" : "(-)Align_ 1 Cycle Time over",
      "L10141" : "(-)Align_ 연속 NG 발생",
      "L10142" : "(-)Align_ 연속 Fail 발생",
      "L10143" : "(-)Align_ 비전 PC Down",
      "L10144" : "(-)Align_",
      "L10145" : "(-)Align_",
      "L10146" : "(-)Align_",
      "L10147" : "(-)Align_",
      "L10148" : "(-)Align_",
      "L10149" : "(-)Align_",
      "L10150" : "(-)Align_ Table 진공 이상",
      "L10151" : "(-)Align_ Table 진공 파기 이상",
      "L10152" : "(-)Align_ NG 상승 이상",
      "L10153" : "(-)Align_ NG 하강 이상",
      "L10154" : "(-)Align_ NG 후진 이상",
      "L10155" : "(-)Align_ NG 전진 이상",
      "L10156" : "(-)Align_ NG 진공 이상",
      "L10157" : "(-)Align_ NG 진공 파기 이상",
      "L10158" : "(-)Align_Align 범위초과 Alarm",
      "L10159" : "(-)Align_",
      "L10160" : "(+)Mgz_ 1 Cycle Time over",
      "L10161" : "(+)Mgz_",
      "L10162" : "(+)Mgz_",
      "L10163" : "(+)Mgz_",
      "L10164" : "(+)Mgz_ 투입 이송 상승",
      "L10165" : "(+)Mgz_ 투입 이송 하강",
      "L10166" : "(+)Mgz_ 투입 이송 후진",
      "L10167" : "(+)Mgz_ 투입 이송 전진",
      "L10168" : "(+)Mgz_ 배출 이송 상승",
      "L10169" : "(+)Mgz_ 배출 이송 하강",
      "L10170" : "(+)Mgz_ 배출 이송 후진",
      "L10171" : "(+)Mgz_ 배출 이송 전진",
      "L10172" : "(+)Mgz_ EL Lifter 후진",
      "L10173" : "(+)Mgz_ EL Lifter 전진",
      "L10174" : "(+)Mgz_ 오투입 알람",
      "L10175" : "(+)Mgz_",
      "L10176" : "(+)Mgz_극판 라벨 감지",
      "L10177" : "(+)Mgz_",
      "L10178" : "(+)Mgz_",
      "L10179" : "(+)Mgz_",
      "L10180" : "(+)EL_ 1 Cycle Time over",
      "L10181" : "(+)EL_ 연속 2매 이상",
      "L10182" : "(+)EL_",
      "L10183" : "(+)EL_",
      "L10184" : "(+)EL_ 진공 이상",
      "L10185" : "(+)EL_ 진공 파기 이상",
      "L10186" : "(+)EL_ 극판 소진 센서 설정이상",
      "L10187" : "(+)EL_",
      "L10188" : "(+)EL_",
      "L10189" : "(+)EL_",
      "L10190" : "(+)EL_",
      "L10191" : "(+)EL_",
      "L10192" : "(+)EL_",
      "L10193" : "(+)EL_",
      "L10194" : "(+)EL_",
      "L10195" : "(+)EL_",
      "L10196" : "(+)EL_",
      "L10197" : "(+)EL_",
      "L10198" : "(+)EL_",
      "L10199" : "(+)EL_",
      "L10200" : "(+)Align_ 1 Cycle Time over",
      "L10201" : "(+)Align_ 연속 NG 발생",
      "L10202" : "(+)Align_ 연속 Fail 발생",
      "L10203" : "(+)Align_ 비전 PC Down",
      "L10204" : "(+)Align_",
      "L10205" : "(+)Align_",
      "L10206" : "(+)Align_",
      "L10207" : "(+)Align_",
      "L10208" : "(+)Align_",
      "L10209" : "(+)Align_",
      "L10210" : "(+)Align_ Table 진공 이상",
      "L10211" : "(+)Align_ Table 진공 파기 이상",
      "L10212" : "(+)Align_ NG 상승 이상",
      "L10213" : "(+)Align_ NG 하강 이상",
      "L10214" : "(+)Align_ NG 후진 이상",
      "L10215" : "(+)Align_ NG 전진 이상",
      "L10216" : "(+)Align_ NG 진공 이상",
      "L10217" : "(+)Align_ NG 진공 파기 이상",
      "L10218" : "(+)Align_Align 범위초과 Alarm",
      "L10219" : "(+)Align_",
      "L10220" : "UWD_ 1 Cycle time over",
      "L10221" : "UWD_ Dancer + Over",
      "L10222" : "UWD_ Dancer - Over",
      "L10223" : "UWD_ Dancer 각도값 이상",
      "L10224" : "UWD_ Sepa 풀기 timeover",
      "L10225" : "UWD_ Feeder B/Dencer + Over",
      "L10226" : "UWD_ Feeder B/Dencer - Over",
      "L10227" : "UWD_",
      "L10228" : "UWD_ ECP 위치 값 이상",
      "L10229" : "UWD_",
      "L10230" : "UWD_ 상 splicing 상승 이상",
      "L10231" : "UWD_ 상 splicing 하강 이상",
      "L10232" : "UWD_ 하 splicing 상승 이상",
      "L10233" : "UWD_ 하 splicing 하강 이상",
      "L10234" : "UWD_ 진공 이상",
      "L10235" : "UWD_",
      "L10236" : "UWD_ Feed Roll Unchuck 이상",
      "L10237" : "UWD_ Feed Roll chuck 이상",
      "L10238" : "UWD_",
      "L10239" : "UWD_",
      "L10240" : "Swing_ 1cycle time over",
      "L10241" : "Swing_",
      "L10242" : "Swing_",
      "L10243" : "Swing_",
      "L10244" : "Swing_ (-) 극판 진공 이상",
      "L10245" : "Swing_ (-) 극판 진공 파기 이상",
      "L10246" : "Swing_ (+) 극판 진공 이상",
      "L10247" : "Swing_ (+) 극판 진공 파기 이상",
      "L10248" : "Swing_ (-) 극판 Sub진공 이상",
      "L10249" : "Swing_ (-) 극판Sub진공 파기 이상",
      "L10250" : "Swing_ (+) 극판 Sub진공 이상",
      "L10251" : "Swing_ (+) 극판Sub진공 파기 이상",
      "L10252" : "Swing_",
      "L10253" : "Swing_",
      "L10254" : "Swing_",
      "L10255" : "Swing_",
      "L10256" : "Swing_",
      "L10257" : "Swing_",
      "L10258" : "Swing_",
      "L10259" : "Swing_",
      "L10260" : "STK_ 1 Cycle time over",
      "L10261" : "STK_",
      "L10262" : "STK_",
      "L10263" : "STK_",
      "L10264" : "STK_",
      "L10265" : "STK_",
      "L10266" : "STK_",
      "L10267" : "STK_",
      "L10268" : "STK_",
      "L10269" : "STK_",
      "L10270" : "STK_",
      "L10271" : "STK_",
      "L10272" : "STK_",
      "L10273" : "STK_",
      "L10274" : "STK_",
      "L10275" : "STK_",
      "L10276" : "STK_",
      "L10277" : "STK_",
      "L10278" : "STK_",
      "L10279" : "STK_",
      "L10280" : "CUT_ 1 Cycle time over",
      "L10281" : "CUT_",
      "L10282" : "CUT_",
      "L10283" : "CUT_",
      "L10284" : "CUT_ Cutter 상승 검출",
      "L10285" : "CUT_ Cutter 하강 검출",
      "L10286" : "CUT_ Knife 하부후진 이상",
      "L10287" : "CUT_ Knife 하부전진 이상",
      "L10288" : "CUT_ 하 Clamp 상승 검출",
      "L10289" : "CUT_ 하 Clamp 하강 검출",
      "L10290" : "CUT_ Knife 상부후진 이상",
      "L10291" : "CUT_ Knife 상부전진 이상",
      "L10292" : "CUT_ Tention 후진 이상",
      "L10293" : "CUT_ Tention 전진 이상",
      "L10294" : "CUT_실효부하율 상한초과",
      "L10295" : "CUT_실효부하율 하한 초과",
      "L10296" : "CUT_",
      "L10297" : "CUT_",
      "L10298" : "CUT_",
      "L10299" : "CUT_",
      "L10300" : "PULL_ 1 Cycle time over",
      "L10301" : "PULL_",
      "L10302" : "PULL_",
      "L10303" : "PULL_",
      "L10304" : "PULL_ Unchuck 이상",
      "L10305" : "PULL_ chuck 이상",
      "L10306" : "PULL_",
      "L10307" : "PULL_",
      "L10308" : "PULL_",
      "L10309" : "PULL_",
      "L10310" : "PULL_",
      "L10311" : "PULL_",
      "L10312" : "PULL_",
      "L10313" : "PULL_",
      "L10314" : "PULL_",
      "L10315" : "PULL_",
      "L10316" : "PULL_",
      "L10317" : "PULL_",
      "L10318" : "PULL_",
      "L10319" : "PULL_",
      "L10320" : "Wind_ 1 cycle 이상",
      "L10321" : "Wind_",
      "L10322" : "Wind_",
      "L10323" : "Wind_",
      "L10324" : "Wind_ 좌측 Unchuck 이상",
      "L10325" : "Wind_ 좌측 chuck 이상",
      "L10326" : "Wind_ 우측 Unchuck 이상",
      "L10327" : "Wind_ 우측 chuck 이상",
      "L10328" : "Wind_",
      "L10329" : "Wind_",
      "L10330" : "Wind_",
      "L10331" : "Wind_",
      "L10332" : "Wind_",
      "L10333" : "Wind_",
      "L10334" : "Wind_",
      "L10335" : "Wind_",
      "L10336" : "Wind_",
      "L10337" : "Wind_",
      "L10338" : "Wind_",
      "L10339" : "Wind_",
      "L10340" : "Bond_ 1 Cycle 이상",
      "L10341" : "Bond_",
      "L10342" : "Bond_",
      "L10343" : "Bond_",
      "L10344" : "Bond_ Head 상승 이상",
      "L10345" : "Bond_ Head 하강 이상",
      "L10346" : "Bond_ Head Return 이상",
      "L10347" : "Bond_ Head turn 이상",
      "L10348" : "Bond_ Brush 후진 이상",
      "L10349" : "Bond_ Brush 전진 이상",
      "L10350" : "Bond_ Controller 이상",
      "L10351" : "Bond_",
      "L10352" : "Bond_",
      "L10353" : "Bond_",
      "L10354" : "Bond_",
      "L10355" : "Bond_",
      "L10356" : "Bond_",
      "L10357" : "Bond_",
      "L10358" : "Bond_",
      "L10359" : "Bond_",
      "L10360" : "T/T_ 1 cycle time over",
      "L10361" : "T/T_",
      "L10362" : "T/T_",
      "L10363" : "T/T_",
      "L10364" : "T/T_ J/R 미검출",
      "L10365" : "T/T_ J/R 검출 센서 이상",
      "L10366" : "T/T_",
      "L10367" : "T/T_",
      "L10368" : "T/T_",
      "L10369" : "T/T_",
      "L10370" : "T/T_",
      "L10371" : "T/T_",
      "L10372" : "T/T_",
      "L10373" : "T/T_",
      "L10374" : "T/T_",
      "L10375" : "T/T_",
      "L10376" : "T/T_",
      "L10377" : "T/T_",
      "L10378" : "T/T_",
      "L10379" : "T/T_",
      "L10380" : "ULD_ 1 cycle time over",
      "L10381" : "ULD_",
      "L10382" : "ULD_",
      "L10383" : "ULD_",
      "L10384" : "ULD_ Clamper 상승 이상",
      "L10385" : "ULD_ Clamper 하강 이상",
      "L10386" : "ULD_ Unclamp 이상",
      "L10387" : "ULD_ Clamp 이상",
      "L10388" : "ULD_포크상승 이상",
      "L10389" : "ULD_포크하강 이상",
      "L10390" : "ULD_ Conv' 정상 신호 이상",
      "L10391" : "ULD_ Conv' 간섭 외 신호 이상",
      "L10392" : "ULD_ Conv' 투입 위치 확인 지연",
      "L10393" : "ULD_ Conv' 투입 완료 지연",
      "L10394" : "ULD_ Conv' 투입 완료 신호확인 지",
      "L10395" : "ULD_ Conv'",
      "L10396" : "ULD_ Conv'",
      "L10397" : "ULD_ Conv'",
      "L10398" : "ULD_ Conv'",
      "L10399" : "ULD_ Conv'",
      "L10400" : "SM01_Error (Sepa Unwinder)",
      "L10401" : "SM01_Servo Error (Sepa Unwinder)",
      "L10402" : "SM01_????? (Sepa Unwinder)",
      "L10403" : "SM01_급정지 (Sepa Unwinder)",
      "L10404" : "SM02_Error (Sepa EPC)",
      "L10405" : "SM02_Servo Error (Sepa EPC)",
      "L10406" : "SM02_????? (Sepa EPC)",
      "L10407" : "SM02_급정지 (Sepa EPC)",
      "L10408" : "SM03_Error (Feeding roll)",
      "L10409" : "SM03_Servo Error (Feeding roll)",
      "L10410" : "SM03_????? (Feeding roll)",
      "L10411" : "SM03_급정지 (Feeding roll)",
      "L10412" : "SM04_Error (음극_EL공급 X)",
      "L10413" : "SM04_Servo Error (음극_EL공급 X)",
      "L10414" : "SM04_????? (음극_EL공급 X)",
      "L10415" : "SM04_급정지 (음극_EL공급 X)",
      "L10416" : "SM05_Error (음극_EL공급 Z)",
      "L10417" : "SM05_Servo Error (음극_EL공급 Z)",
      "L10418" : "SM05_????? (음극_EL공급 Z)",
      "L10419" : "SM05_급정지 (양극_EL공급 X)",
      "L10420" : "SM06_Error (음극_Align Y1)",
      "L10421" : "SM06_Servo Error (음극_Align Y1)",
      "L10422" : "SM06_????? (음극_Align Y1)",
      "L10423" : "SM06_급정지 (음극_Align Y1)",
      "L10424" : "SM07_Error (음극_Align Y2)",
      "L10425" : "SM07_Servo Error (음극_Align Y2)",
      "L10426" : "SM07_????? (음극_Align Y2)",
      "L10427" : "SM07_급정지 (음극_Align Y2)",
      "L10428" : "SM08_Error (음극_Align X1)",
      "L10429" : "SM08_Servo Error (음극_Align X1)",
      "L10430" : "SM08_????? (음극_Align X1)",
      "L10431" : "SM08_급정지 (음극_Align X1)",
      "L10432" : "SM09_Error (음극_EL공급 X)",
      "L10433" : "SM09_Servo Error (음극_EL공급 X)",
      "L10434" : "SM09_????? (음극_EL공급 X)",
      "L10435" : "SM09_급정지 (음극_EL공급 Z)",
      "L10436" : "SM10_Error (양극_EL공급 Z)",
      "L10437" : "SM10_Servo Error (양극_EL공급 Z)",
      "L10438" : "SM10_????? (양극_EL공급 Z)",
      "L10439" : "SM10_급정지 (양극_EL공급 Z)",
      "L10440" : "SM11_Error (양극_Align Y1)",
      "L10441" : "SM11_Servo Error (양극_Align Y1)",
      "L10442" : "SM11_????? (양극_Align Y1)",
      "L10443" : "SM11_급정지 (양극_Align Y1)",
      "L10444" : "SM12_Error (양극_Align Y2)",
      "L10445" : "SM12_Servo Error (양극_Align Y2)",
      "L10446" : "SM12_????? (양극_Align Y2)",
      "L10447" : "SM12_급정지 (양극_Align Y2)",
      "L10448" : "SM13_Error (양극_Align X1)",
      "L10449" : "SM13_Servo Error (양극_Align X1)",
      "L10450" : "SM13_????? (양극_Align X1)",
      "L10451" : "SM13_급정지 (양극_Align X1)",
      "L10452" : "SM14_Error (Sepa Guide Y)",
      "L10453" : "SM14_Servo Error (Sepa Guide Y)",
      "L10454" : "SM14_????? (Sepa Guide Y)",
      "L10455" : "SM14_급정지 (Sepa Guide Y)",
      "L10456" : "SM15_Error (Sepa Guide Y)",
      "L10457" : "SM15_Servo Error (Reverved)",
      "L10458" : "SM15_????? (Reverved)",
      "L10459" : "SM15_급정지 (Reverved)",
      "L10460" : "SM16_Error (Swing S)",
      "L10461" : "SM16_Servo Error (Swing S)",
      "L10462" : "SM16_????? (Swing S)",
      "L10463" : "SM16_급정지 (Swing S)",
      "L10464" : "SM17_Error (Swing 음극 Z)",
      "L10465" : "SM17_Servo Error (Swing 음극 Z)",
      "L10466" : "SM17_????? (Swing 음극 Z)",
      "L10467" : "SM17_급정지 (Swing 음극 Z)",
      "L10468" : "SM18_Error (Swing 양극 Z)",
      "L10469" : "SM18_Servo Error (Swing 양극 Z)",
      "L10470" : "SM18_????? (Swing 양극 Z)",
      "L10471" : "SM18_급정지 (Swing 양극 Z)",
      "L10472" : "SM19_Error (Stack Table Z)",
      "L10473" : "SM19_Servo Error (Stack Table Z)",
      "L10474" : "SM19_????? (Stack Table Z)",
      "L10475" : "SM19_급정지 (Stack Table Z)",
      "L10476" : "SM20_Error (Stack 양극맨드릴 X1)",
      "L10477" : "SM20_Servo Error (Stack 양극맨드",
      "L10478" : "SM20_????? (Stack 양극맨드릴 X1)",
      "L10479" : "SM20_급정지 (Stack 양극맨드릴 X1",
      "L10480" : "SM21_Error (Stack 양극맨드릴 X2)",
      "L10481" : "SM21_Servo Error (Stack 양극맨드",
      "L10482" : "SM21_????? (Stack 양극맨드릴 X2)",
      "L10483" : "SM21_급정지 (Stack 양극맨드릴 X2",
      "L10484" : "SM22_Error (Stack 양극맨드릴 Z)",
      "L10485" : "SM22_Servo Error (Stack 양극맨드",
      "L10486" : "SM22_????? (Stack 양극맨드릴 Z)",
      "L10487" : "SM22_급정지 (Stack 양극맨드릴 Z)",
      "L10488" : "SM23_Error (Stack 음극맨드릴 X1)",
      "L10489" : "SM23_Servo Error (Stack 음극맨드",
      "L10490" : "SM23_????? (Stack 음극맨드릴 X1)",
      "L10491" : "SM23_급정지 (Stack 음극맨드릴 X1",
      "L10492" : "SM24_Error (Stack 음극맨드릴 X2)",
      "L10493" : "SM24_Servo Error (Stack 음극맨드",
      "L10494" : "SM24_????? (Stack 음극맨드릴 X2)",
      "L10495" : "SM24_급정지 (Stack 음극맨드릴 X2",
      "L10496" : "SM25_Error (Stack 음극맨드릴 Z)",
      "L10497" : "SM25_Servo Error (Stack 음극맨드",
      "L10498" : "SM25_????? (Stack 음극맨드릴 Z)",
      "L10499" : "SM25_급정지 (Stack 음극맨드릴 Z)",
      "L10500" : "SM26_Error (Cut Y)",
      "L10501" : "SM26_Servo Error (Cut Y)",
      "L10502" : "SM26_????? (Cut Y)",
      "L10503" : "SM26_급정지 (Cut Y)",
      "L10504" : "SM27_Error (Pull 회전)",
      "L10505" : "SM27_Servo Error (Pull 회전)",
      "L10506" : "SM27_????? (Pull 회전)",
      "L10507" : "SM27_급정지 (Pull 회전)",
      "L10508" : "SM28_Error (Pull Y)",
      "L10509" : "SM28_Servo Error (Pull Y)",
      "L10510" : "SM28_????? (Pull Y)",
      "L10511" : "SM28_급정지 (Pull Y)",
      "L10512" : "SM29_Error (Winder X1)",
      "L10513" : "SM29_Servo Error (Winder X1)",
      "L10514" : "SM29_????? (Winder X1)",
      "L10515" : "SM29_급정지 (Winder X1)",
      "L10516" : "SM30_Error (Winder X2)",
      "L10517" : "SM30_Servo Error (Winder X2)",
      "L10518" : "SM30_????? (Winder X2)",
      "L10519" : "SM30_급정지 (Winder X2)",
      "L10520" : "SM31_Error (Winder S1)",
      "L10521" : "SM31_Servo Error (Winder S1)",
      "L10522" : "SM31_????? (Winder S1)",
      "L10523" : "SM31_급정지 (Winder S1)",
      "L10524" : "SM32_Error (Winder S2)",
      "L10525" : "SM32_Servo Error (Winder S2)",
      "L10526" : "SM32_????? (Winder S2)",
      "L10527" : "SM32_급정지 (Winder S2)",
      "L10528" : "SM33_Error (Bond X)",
      "L10529" : "SM33_Servo Error (Bond X)",
      "L10530" : "SM33_????? (Bond X)",
      "L10531" : "SM33_급정지 (Bond X)",
      "L10532" : "SM34_Error (Bond Z)",
      "L10533" : "SM34_Servo Error (Bond Z)",
      "L10534" : "SM34_????? (Bond Z)",
      "L10535" : "SM34_급정지 (Bond Z)",
      "L10536" : "SM35_Error (T/Table X)",
      "L10537" : "SM35_Servo Error (T/Table X)",
      "L10538" : "SM35_????? (T/Table X)",
      "L10539" : "SM35_급정지 (T/Table X)",
      "L10540" : "SM36_Error (T/Table S)",
      "L10541" : "SM36_Servo Error (T/Table S)",
      "L10542" : "SM36_????? (T/Table S)",
      "L10543" : "SM36_급정지 (T/Table S)",
      "L10544" : "SM37_Error (Unloader Y)",
      "L10545" : "SM37_Servo Error (Unloader Y)",
      "L10546" : "SM37_????? (Unloader Y)",
      "L10547" : "SM37_급정지 (Unloader Y)",
      "L10548" : "SM38_Error (음극_M/L Z)",
      "L10549" : "SM38_Servo Error (음극_M/L Z)",
      "L10550" : "SM38_????? (음극_M/L Z)",
      "L10551" : "SM38_급정지 (음극_M/L Z)",
      "L10552" : "SM39_Error (음극_EL/L Z)",
      "L10553" : "SM39_Servo Error (음극_EL/L Z)",
      "L10554" : "SM39_????? (음극_EL/L Z)",
      "L10555" : "SM39_급정지 (음극_EL/L Z)",
      "L10556" : "SM40_Error (양극_M/L Z)",
      "L10557" : "SM40_Servo Error (양극_M/L Z)",
      "L10558" : "SM40_????? (양극_M/L Z)",
      "L10559" : "SM40_급정지 (양극_M/L Z)",
      "L10560" : "SM41_Error (양극_EL/L Z)",
      "L10561" : "SM41_Servo Error (양극_EL/L Z)",
      "L10562" : "SM41_????? (양극_EL/L Z)",
      "L10563" : "SM41_급정지 (양극_EL/L Z)",
      "L10564" : "SM42_Error(Unloader Z)",
      "L10565" : "SM42_Servo Error(Unloader Z)",
      "L10566" : "SM42_?????(Unloader Z)",
      "L10567" : "SM42_급정지(Unloader Z)",
      "L10568" : "SM43_Error(스택 SEPA Z축)",
      "L10569" : "SM43_Servo Error(스택 SEPA Z축)",
      "L10570" : "SM43_?????(스택 SEPA Z축)",
      "L10571" : "SM43_급정지(스택 SEPA Z축)",
      "L10572" : "SM44_Error(Swing An Z(Sub)",
      "L10573" : "SM44_Servo Error(Swing An Z(Sub)",
      "L10574" : "SM44_?????(Swing An Z(Sub)",
      "L10575" : "SM44_급정지(Swing An Z(Sub)",
      "L10576" : "SM45_Error(Swing Ca Z(Sub)",
      "L10577" : "SM45_Servo Error(Swing Ca Z(Sub)",
      "L10578" : "SM45_?????(Swing Ca Z(Sub)",
      "L10579" : "SM45_급정지(Swing Ca Z(Sub)",
      "L10580" : "SM",
      "L10581" : "SM",
      "L10582" : "SM",
      "L10583" : "SM",
      "L10584" : "SM",
      "L10585" : "SM",
      "L10586" : "SM",
      "L10587" : "SM",
      "L10588" : "SM",
      "L10589" : "SM",
      "L10590" : "SM",
      "L10591" : "SM",
      "L10592" : "SM",
      "L10593" : "SM",
      "L10594" : "SM",
      "L10595" : "SM",
      "L10596" : "SM",
      "L10597" : "SM",
      "L10598" : "SM",
      "L10599" : "SM",
      "L10600" : "공통>  CP01 Trip(Colling fan)",
      "L10601" : "공통>  CP12 Trip(Touch screen)",
      "L10602" : "공통>",
      "L10603" : "공통>",
      "L10604" : "공통>",
      "L10605" : "공통>",
      "L10606" : "공통>",
      "L10607" : "공통>",
      "L10608" : "공통>",
      "L10609" : "공통>",
      "L10610" : "공통> 진공 펌프 점검 주기",
      "L10611" : "공통> 집진기 점검 주기",
      "L10612" : "공통>",
      "L10613" : "공통>",
      "L10614" : "공통>",
      "L10615" : "공통>",
      "L10616" : "공통>",
      "L10617" : "공통>",
      "L10618" : "공통>",
      "L10619" : "공통>",
      "L10620" : "An_Mgz>매거진 Lifter 미검출",
      "L10621" : "An_Mgz>매거진 Lifter 검출 이상",
      "L10622" : "An_Mgz>매거진 방향 이상",
      "L10623" : "An_Mgz>",
      "L10624" : "An_Mgz>",
      "L10625" : "An_Mgz>",
      "L10626" : "An_Mgz>",
      "L10627" : "An_Mgz>",
      "L10628" : "An_Mgz>",
      "L10629" : "An_Mgz>",
      "L10630" : "An_EL>극판 미검출",
      "L10631" : "An_EL>극판 검출 이상",
      "L10632" : "An_EL>극판소진센서 설정이상",
      "L10633" : "An_EL>",
      "L10634" : "An_EL>",
      "L10635" : "An_EL>",
      "L10636" : "An_EL>",
      "L10637" : "An_EL>",
      "L10638" : "An_Align>FOIL 불량 연속발생",
      "L10639" : "Vision>데이터 수신 이상 종료",
      "L10640" : "An_Align>극판 미검출",
      "L10641" : "An_Align>극판 검출 이상",
      "L10642" : "An_Align> 2매 검출 발생",
      "L10643" : "An_Align> 연속 NG 발생",
      "L10644" : "An_Align> 연속 Fail 발생",
      "L10645" : "An_Align> 비전 PC Reay Off 상태",
      "L10646" : "An_Align> 비전 PC Busy 신호 없음",
      "L10647" : "An_Align> 비전PC Busy신호Off이상",
      "L10648" : "An_Align> 비전 PC의 응답(판정)TO",
      "L10649" : "An_Align>비전 재확인 판정 NG",
      "L10650" : "Ca_Mgz>매거진 Lifter 미검출",
      "L10651" : "Ca_Mgz>매거진 Lifter 검출 이상",
      "L10652" : "Ca_Mgz>매거진 방향 이상",
      "L10653" : "Ca_Mgz>",
      "L10654" : "Ca_Mgz>",
      "L10655" : "Ca_Mgz>",
      "L10656" : "Ca_Mgz>",
      "L10657" : "Ca_Mgz>",
      "L10658" : "Ca_Mgz>",
      "L10659" : "Ca_Mgz>",
      "L10660" : "Ca_EL>극판 미검출",
      "L10661" : "Ca_EL>극판 검출 이상",
      "L10662" : "Ca_EL>극판소진센서 설정이상",
      "L10663" : "Ca_EL>",
      "L10664" : "Ca_EL>",
      "L10665" : "Ca_EL>",
      "L10666" : "Ca_EL>",
      "L10667" : "Ca_EL>",
      "L10668" : "Ca_Align> FOIL 불량 연속발생",
      "L10669" : "Ca_EL>",
      "L10670" : "Ca_Align>극판 미검출",
      "L10671" : "Ca_Align>극판 검출 이상",
      "L10672" : "Ca_Align> 2매 검출 발생",
      "L10673" : "Ca_Align> 연속 NG 발생",
      "L10674" : "Ca_Align> 연속 Fail 발생",
      "L10675" : "Ca_Align> 비전 PC Reay Off 상태",
      "L10676" : "Ca_Align> 비전 PC Busy 신호 없음",
      "L10677" : "Ca_Align> 비전PC Busy신호Off이상",
      "L10678" : "Ca_Align> 비전 PC의 응답(판정)TO",
      "L10679" : "Ca_Align>비전 재확인 판정 NG",
      "L10680" : "UWD> 상 Splicing 상승 요망",
      "L10681" : "UWD> 하 Splicing 상승 요망",
      "L10682" : "UWD> 분리막 교체 요구",
      "L10683" : "UWD> Unwind servo ready off 상태",
      "L10684" : "UWD>분리막 Air check off 상태",
      "L10685" : "UWD>EPC 설정 범위 Over",
      "L10686" : "UWD>",
      "L10687" : "UWD>",
      "L10688" : "UWD>",
      "L10689" : "UWD>",
      "L10690" : "Swing>음극 극판 미검출",
      "L10691" : "Swing>음극 극판 검출 이상",
      "L10692" : "Swing>음극 극판 정보 없음(삭제)",
      "L10693" : "Swing>",
      "L10694" : "Swing>",
      "L10695" : "Swing>양극 극판 미검출",
      "L10696" : "Swing>양극 극판 검출 이상",
      "L10697" : "Swing>양극 극판 정보 없음(삭제)",
      "L10698" : "Swing>",
      "L10699" : "Swing>",
      "L10700" : "Stack> 전면 맨드릴 (좌) 점검주기",
      "L10701" : "Stack> 전면 맨드릴 (우) 점검주기",
      "L10702" : "Stack> 후면 맨드릴 (좌) 점검주기",
      "L10703" : "Stack> 후면 맨드릴 (우) 점검주기",
      "L10704" : "Stack>",
      "L10705" : "Stack>",
      "L10706" : "Stack>",
      "L10707" : "Stack>",
      "L10708" : "Stack>",
      "L10709" : "Stack>",
      "L10710" : "Cut> Knife 점검 주기",
      "L10711" : "Cut>",
      "L10712" : "Cut>",
      "L10713" : "Cut>",
      "L10714" : "Cut>",
      "L10715" : "Cut>",
      "L10716" : "Cut>",
      "L10717" : "Cut>",
      "L10718" : "Cut>",
      "L10719" : "Cut>",
      "L10720" : "Pull>",
      "L10721" : "Pull>",
      "L10722" : "Pull>",
      "L10723" : "Pull>",
      "L10724" : "Pull>",
      "L10725" : "Pull>",
      "L10726" : "Pull>",
      "L10727" : "Pull>",
      "L10728" : "Pull>",
      "L10729" : "Pull>",
      "L10730" : "Wind> 와인딩 맨드릴 점검주기",
      "L10731" : "Wind>",
      "L10732" : "Wind>",
      "L10733" : "Wind>",
      "L10734" : "Wind>",
      "L10735" : "Wind>",
      "L10736" : "Wind>",
      "L10737" : "Wind>",
      "L10738" : "Wind>",
      "L10739" : "Wind>",
      "L10740" : "Bond> 본딩 점검 주기",
      "L10741" : "Bond> 본딩 노즐 점검 주기",
      "L10742" : "Bond> 브러쉬 점검 주기",
      "L10743" : "Bond>",
      "L10744" : "Bond>",
      "L10745" : "Bond>",
      "L10746" : "Bond>",
      "L10747" : "Bond>",
      "L10748" : "Bond>",
      "L10749" : "Bond>",
      "L10750" : "T/T> J/R 미검출",
      "L10751" : "T/T> J/R 검출 이상",
      "L10752" : "T/T>",
      "L10753" : "T/T>",
      "L10754" : "T/T>",
      "L10755" : "T/T>",
      "L10756" : "T/T>",
      "L10757" : "T/T>",
      "L10758" : "T/T>",
      "L10759" : "T/T>",
      "L10760" : "Uld>",
      "L10761" : "Uld>",
      "L10762" : "Uld>",
      "L10763" : "Uld>",
      "L10764" : "Uld>",
      "L10765" : "Uld>",
      "L10766" : "Uld>",
      "L10767" : "Uld>",
      "L10768" : "Uld>",
      "L10769" : "Uld>",
      "L10770" : "Uld>투입허가 시그널 응답없음",
      "L10771" : "Uld>투입위치 확인 시그널 응답없",
      "L10772" : "Uld>투입완료 확인 시그널 응답없",
      "L10773" : "Uld>배출중 정상 시그널 OFF됨",
      "L10777" : "MES> 음극메거진  유효성  확인v",
      "L10778" : "MES> 양극메거진  유효성  확인",
      "L10779" : "MES> SEPA 유효성 확인 요망",
      "L10780" : "MES_양극Report  Overtime",
      "L10781" : "MES_세파Report  Overtime",
      "L10782" : "MES_음극Report  Overtime",
      "L10783" : "MES_지그Report  Overtime",
      "L10784" : "MES_ON  Status  Error",
      "L10785" : "MES E->CDatetimeRQST.   Error",
      "L10786" : "MESC->E DatetimeCommand Timeover",
      "L10787" : "MES     Control Req Off Error",
      "L10788" : "MES     Control Command Error",
      "L10789" : "MES_양극ALARM   Report  Error",
      "L10790" : "MES     EQP StatChange  Error",
      "L10791" : "MES     Model   Change  보고 Err",
      "L10792" : "CIM     Message Reply   Error",
      "L10793" : "MES SEPA유효성  NG",
      "L10794" : "양극    메거진  BCR ReadAlarm",
      "L10795" : "MES  JIG유효성  NG",
      "L10796" : "MES  양극메거진  유효성  NG",
      "L10797" : "음극    메거진  BCR ReadAlarm",
      "L10798" : "MES 음극메거진  유효성  NG",
      "L10799" : "JIG BCR Read    Alarm",
      "L10800" : "작업 완료 (금일 생산 OK)",
      "L10810" : "An_Align>음극 극판 2매 검출",
      "L10811" : "An_Mgz>음극 매거진 공급 요구",
      "L10812" : "An_Mgz>음극 매거진 배출 요구",
      "L10820" : "Ca_Align>양극 극판 2매 검출",
      "L10821" : "Ca_Mgz>양극 매거진 공급 요구",
      "L10822" : "Ca_Mgz>양극 매거진 배출 요구",
      "L10829" : "Bond    Tank Low",
      "L10830" : "Sepa Roll 미검출"
    }
  }
});
