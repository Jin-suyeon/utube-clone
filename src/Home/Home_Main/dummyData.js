const dummyData = [
  {
    id: 1,
    mainImg: "https://i.ytimg.com/an_webp/Z1zrovY9S48/mqdefault_6s.webp?du=3000&sqp=CNbOlYcG&rs=AOn4CLADnLoy4TekAMaQ_qsUa2ZOO8IUtQ",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLQiigi8qrh_QGwx2_1Dz6a-3m-XWxOivMx09tA13A=s68-c-k-c0x00ffffff-no-rj",
    mainText: "영국 오총사가 처음 먹어 본 한국 토스트 맛 평가는?! 영국 오총사의 한국 즐기기 8편",
    name: "에밀튜브-EmilTUBE",
    views: "조회수 61만회",
    load: "1년 전"
  },
  {
    id: 2,
    mainImg: "https://i.ytimg.com/vi/1Fpl4KlWvSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgn8dGkRZPVzOa6exnKIfJzpqoBA",
    subImg: "https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj",
    mainText: "Soraki Ghibli || 지브리 피아노 씩씩 거리, 하늘의 성, 하울의 움직이는 성,... #35",
    name: "스튜디오 지브리 Ghibli Studio",
    views: "조회수 21만회",
    load: "1개월 전"
  },
  {
    id: 3,
    mainImg: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLtqhjnv15Y388joYu5qQ3VjlhZw",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLQDWRc1hm8rKxYbFamDD07XwfEVgDtVxQf1cUoSUQ=s68-c-k-c0x00ffffff-no-rj",
    mainText: "Playlist 방방 신나진 않지만 그렇다고 졸리지도 않을 노동요 맛집 1호점",
    name: "루프탑뮤직 Rooftop Music",
    views: "조회수 9.4만회",
    load: "5일 전"
  },
  {
    id: 4,
    mainImg: "https://i.ytimg.com/vi/fzJbg4oSxbo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxLUMq4fc59RufmcpzMx9fKzvxBQ",
    subImg: "https://yt3.ggpht.com/hZ5Y3TLs9sKW6k4Ka3yg5fft-qJCuajwU88O5LIFgC2629KsCE4YeTdpD4ZWMOnof639TKLG9w=s68-c-k-c0x00ffffff-no-rj",
    mainText: "[호주워킹홀리데이]#2.영알못이면 어쩌나요? 영어공부팁,궁금증",
    name: "신아로미 seen aromi",
    views: "조회수 18만회",
    load: "2년 전"
  },
  {
    id: 5,
    mainImg: "https://i.ytimg.com/vi/p9wWEBO3rxU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASfnyEK_KuFA2vq1a4_aJDKM_t6A",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLQ4nzeOm-HiGSeiNbmdroXZw3US7qQJvsOg0s4g=s68-c-k-c0x00ffffff-no-rj",
    mainText: "아는한 숲속 빗소리, 이끼 고사리 원시림 포천 평강식물원. 수면유도 ASMR",
    name: "Hello Korea",
    views: "조회수 9.9만회",
    load: "1주 전"
  },
  {
    id: 6,
    mainImg: "https://i.ytimg.com/vi/Lg_mDJTljFI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8o6oI1fXYHv7BeK6Sh2IvEk-56g",
    subImg: "https://yt3.ggpht.com/gUp3c2C9lmy8vya7APAyZi2Hm-X6_t6eBIe2EI7rInkhzrEFyrXkPuAYWSfWgxAaGXL8SeOw_w=s68-c-k-c0x00ffffff-no-rj",
    mainText: "절대 잊지 못할 추억의 그때 그시절 노래 모음",
    name: "레몬쓰",
    views: "조회수 14만회",
    load: "1개월 전"
  },
  {
    id: 7,
    mainImg: "https://i.ytimg.com/vi/n-MR6Kok-Nc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCml_YwSzRH2OcKC_BrtErTpvEswg",
    subImg: "https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj",
    mainText: "이사벨&올리버&스테파니 표 수박화☆|#어서와 한국은 처음이지|EP.150",
    name: "ALL THE K-JAM 올더케이잼",
    views: "조회수 13만회",
    load: "11개월 전"
  },
  {
    id: 8,
    mainImg: "https://i.ytimg.com/an_webp/oSkVBSh1Ras/mqdefault_6s.webp?du=3000&sqp=CKHWlYcG&rs=AOn4CLBe190rCOGBEw7fOQM4yWPnnoH9uA",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLRtMbJc5Y3_Jl8At3Tc0HvJfnoUBMXu7QK3rJRqIg=s68-c-k-c0x00ffffff-no-rj",
    mainText: "[먹는브이로그]짜릿해 늘 새로워 맛있는게 최고야!",
    name: "해쭈[HAEJOO]",
    views: "조회수 31만회",
    load: "1일 전"
  },
  {
    id: 9,
    mainImg: "https://i.ytimg.com/vi/CDjoX4wX1ow/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOUk8hCQQjkGEJj217VxIXHUWGFA",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLRuhQFpJvGNqrVLZFx-E8cqCsfEBSYMtET-Pom8VQ=s68-c-k-c0x00ffffff-no-rj",
    mainText: "일주일동안 매일 외출하기 챌린지",
    name: "햄튜브",
    views: "조회수 52만회",
    load: "2년 전"
  },
  {
    id: 10,
    mainImg: "https://i.ytimg.com/vi/B_EGqGnT_Rg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3FqyivV6BtPU2yPEgiD3Vz5j_ZA",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLSxRDhrVW5dd7auRT_EgDUJglyEFe_xMVub0qh_I_4=s68-c-k-c0x00ffffff-no-rj",
    mainText: "작고 소중하던 나의 보석함 (Playlist)",
    name: "It's me. Hello.",
    views: "조회수 4.1만회",
    load: "1개월 전"
  },
  {
    id: 11,
    mainImg: "https://i.ytimg.com/vi/VY9I78gNFT4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOQRRPB-B2gQxQt9dUk1fo7PsEbw",
    subImg: "https://yt3.ggpht.com/ytc/AKedOLQiigi8qrh_QGwx2_1Dz6a-3m-XWxOivMx09tA13A=s68-c-k-c0x00ffffff-no-rj",
    mainText: "숯불닭갈비를 처음 맛본 영국 오총사의 반응은?! 오총사의 한굴즐기기 9편!",
    name: "에밀튜브-EmilTUBE",
    views: "조회수 62만회",
    load: "1개월 전"
  },
  {
    id: 12,
    mainImg: "https://i.ytimg.com/vi/ds-FowwO9Lg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8ShgehG_Iy8nAuKCjQqTRKGj5Ow",
    subImg: "https://yt3.ggpht.com/EbSTbiqTn_DZVLbF0buXN4Chz1RiCPjpjEZHMSUmDsWqysAY7Y4z_7snwWncscuLUT38Tk2zLg=s68-c-k-c0x00ffffff-no-rj",
    mainText: "[Playlist]감성 인디 노래모음|광고없는 국내음악 플레이리스트 이별 플리",
    name: "핑프",
    views: "조회수 4.7만회",
    load: "1개월 전"
  },
  {
    id: 13,
    mainImg: "https://i.ytimg.com/vi/1Fpl4KlWvSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgn8dGkRZPVzOa6exnKIfJzpqoBA",
    subImg: "https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj",
    mainText: "Soraki Ghibli || 지브리 피아노 👏👏 씩씩 거리, 하늘의 성, 하울의 움직이는 성,... #35",
    name: "스튜디오 지브리 Ghibli Studio",
    views: "조회수 21만회",
    load: "1개월 전"
  },
  {
    id: 14,
    mainImg: "https://i.ytimg.com/vi/1Fpl4KlWvSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgn8dGkRZPVzOa6exnKIfJzpqoBA",
    subImg: "https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj",
    mainText: "Soraki Ghibli || 지브리 피아노 👏👏 씩씩 거리, 하늘의 성, 하울의 움직이는 성,... #35",
    name: "스튜디오 지브리 Ghibli Studio",
    views: "조회수 21만회",
    load: "1개월 전"
  },
  {
    id: 15,
    mainImg: "https://i.ytimg.com/vi/1Fpl4KlWvSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgn8dGkRZPVzOa6exnKIfJzpqoBA",
    subImg: "https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj",
    mainText: "Soraki Ghibli || 지브리 피아노 👏👏 씩씩 거리, 하늘의 성, 하울의 움직이는 성,... #35",
    name: "스튜디오 지브리 Ghibli Studio",
    views: "조회수 21만회",
    load: "1개월 전"
  },
  {
    id: 16,
    mainImg: "https://i.ytimg.com/vi/1Fpl4KlWvSI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgn8dGkRZPVzOa6exnKIfJzpqoBA",
    subImg: "https://yt3.ggpht.com/NgiSqZNIK1MRAy7gzEOI5Gg-giFL176ywbTsf3hsTrwGYE0qQojsAX-gEgqMZOLXR0zTunXtppU=s68-c-k-c0x00ffffff-no-rj",
    mainText: "Soraki Ghibli || 지브리 피아노 👏👏 씩씩 거리, 하늘의 성, 하울의 움직이는 성,... #35",
    name: "스튜디오 지브리 Ghibli Studio",
    views: "조회수 21만회",
    load: "1개월 전"
  }
]

export default dummyData