-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 23, 2022 lúc 04:41 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlvbproject2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `base_document`
--

CREATE TABLE `base_document` (
  `id` int(11) NOT NULL,
  `ma_vb` varchar(10) NOT NULL,
  `ten_vb` varchar(45) NOT NULL,
  `noi_dung_vb` varchar(200) NOT NULL,
  `ma_co_quan` varchar(10) NOT NULL,
  `so_ki_hieu` varchar(25) NOT NULL,
  `chuc_vu_nguoi_ky` varchar(45) NOT NULL,
  `ten_nguoi_ky` varchar(40) NOT NULL,
  `thoi_gian_ban_hanh` datetime NOT NULL,
  `thong_tin_khac` varchar(200) NOT NULL,
  `thoi_gian_nhan` varchar(30) NOT NULL,
  `id_category` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `nguoi_gui_den` varchar(50) NOT NULL,
  `noi_gui_den` varchar(100) NOT NULL,
  `trang_thai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `base_document`
--

INSERT INTO `base_document` (`id`, `ma_vb`, `ten_vb`, `noi_dung_vb`, `ma_co_quan`, `so_ki_hieu`, `chuc_vu_nguoi_ky`, `ten_nguoi_ky`, `thoi_gian_ban_hanh`, `thong_tin_khac`, `thoi_gian_nhan`, `id_category`, `name`, `nguoi_gui_den`, `noi_gui_den`, `trang_thai`) VALUES
(26, '', 'Văn bản để biết', '', '11100', 'VB20123', '', '', '0000-00-00 00:00:00', '', '05/20/2022 10:10 PM', 1, 'profile-1658587024478.pdf', 'Nguyễn Văn Linh', 'Hà Nội', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `ma` varchar(10) NOT NULL,
  `ten` varchar(45) NOT NULL,
  `list_id_chuc_vu_can_phe_duyet` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `ma`, `ten`, `list_id_chuc_vu_can_phe_duyet`) VALUES
(1, '', 'Văn bản để biết', '5,6,7,8'),
(2, '', 'VB thuộc thẩm quyền giải quyết của UBND TP', '3,4,5,6,7,8'),
(3, '', 'VB Thuộc thẩm quyền giải quyết của Văn Phòng ', '3,6,7,8'),
(4, '', 'VB không thuộc thẩm quyền giải quyết của UBND', '8,6,5');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuc_vu`
--

CREATE TABLE `chuc_vu` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chuc_vu`
--

INSERT INTO `chuc_vu` (`id`, `name`) VALUES
(1, 'Văn Thư'),
(2, 'Lãnh đạo phòng HC-TC'),
(3, 'Chánh văn phòng'),
(4, 'Lãnh đạo UBND-TP'),
(5, 'Lãnh đạo VP UBND-TP'),
(6, 'Trưởng phòng'),
(7, 'Phó trưởng phòng'),
(8, 'Chuyên viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `conversation`
--

CREATE TABLE `conversation` (
  `id` int(10) NOT NULL,
  `id_user_A` int(10) NOT NULL,
  `id_user_B` int(10) NOT NULL,
  `list_id_message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giaymoi`
--

CREATE TABLE `giaymoi` (
  `id` int(11) NOT NULL,
  `domat` varchar(45) NOT NULL,
  `dokhan` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `message`
--

CREATE TABLE `message` (
  `id` int(10) NOT NULL,
  `id_user_A` int(10) NOT NULL,
  `id_user_B` int(10) NOT NULL,
  `content` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phong_ban`
--

CREATE TABLE `phong_ban` (
  `id` int(11) NOT NULL,
  `ma_phong` varchar(10) NOT NULL,
  `ten_phong` varchar(45) NOT NULL,
  `so_can_bo` int(11) NOT NULL,
  `dia_chi` varchar(200) NOT NULL,
  `id_truong_phong` int(11) NOT NULL,
  `sdt_phong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `phong_ban`
--

INSERT INTO `phong_ban` (`id`, `ma_phong`, `ten_phong`, `so_can_bo`, `dia_chi`, `id_truong_phong`, `sdt_phong`) VALUES
(8, 'UBND-HN', 'Ủy ban nhân dân tỉnh', 10, '', 0, 372547687),
(10, 'UBND-HN1', 'Phòng HCHN', 10, 'Hai Bà Trưng - Hà Nội', 0, 372547655);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `ma_quyen` varchar(20) NOT NULL,
  `ten_quyen` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `ma_quyen`, `ten_quyen`) VALUES
(1, '', 'user'),
(2, '', 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `ho_ten` varchar(45) NOT NULL,
  `goi_tinh` varchar(10) NOT NULL,
  `ngay_sinh` varchar(30) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `chuc_vu` int(4) NOT NULL,
  `id_phong_ban` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `ho_ten`, `goi_tinh`, `ngay_sinh`, `name`, `password`, `chuc_vu`, `id_phong_ban`, `email`, `role`) VALUES
(1, 'Nguyễn Văn Linh', 'Nam', '27/12/2000', 'Nguyễn Văn Linh', 'vanlinh', 0, 0, 'linh.nv187180@sis.hust.eud.vn', 2),
(20, 'Nguyễn Văn A ', 'Nam', '1/8/2000', '', 'vanlinh', 5, 8, 'ldp1@gmail.com', 1),
(21, 'Nguyễn Văn B', 'Nam', '11/01/2000', '', 'vanlinh', 6, 8, 'tp1@gmail.com', 1),
(22, 'Nguyễn Văn T', 'Nam', '27/12/2000', '', 'vanlinh', 7, 8, 'ptpp1@gmail.com', 1),
(23, 'Nguyễn Văn C', 'Nam', '11/01/2000', '', 'vanlinh', 8, 8, 'cvp1@gmail.com', 1),
(24, 'Nguyễn Văn D', 'Nam', '1/01/2000', '', 'vanlinh', 1, 8, 'vtp1@gmail.com', 1),
(27, 'Nguyễn Văn A', 'Nam', '1/8/2000', '', 'vanlinh', 3, 10, 'cvpp2@gamil.com', 1),
(28, 'Nguyễn Văn T', 'Nam', '1/8/2000', '', 'vanlinh', 4, 10, 'ldubndtpp2@gmail.com', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_quyen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vanban`
--

CREATE TABLE `vanban` (
  `id` int(11) NOT NULL,
  `thoi_gia_xu_ly` datetime NOT NULL,
  `ho_so_tai_lieu_gui_kem` varchar(200) NOT NULL,
  `do_mat` varchar(45) NOT NULL,
  `do_khan` varchar(45) NOT NULL,
  `trang_thai_xu_ly` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xu_ly`
--

CREATE TABLE `xu_ly` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_base_document` int(11) NOT NULL,
  `thoi_gian` varchar(30) NOT NULL,
  `chi_chu` varchar(45) NOT NULL,
  `hanh_dong` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `xu_ly`
--

INSERT INTO `xu_ly` (`id`, `id_user`, `id_base_document`, `thoi_gian`, `chi_chu`, `hanh_dong`) VALUES
(47, 20, 26, '2022-7-23 21:37:34', '', 'yes'),
(48, 21, 26, '2022-7-23 21:38:7', '', 'yes');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `base_document`
--
ALTER TABLE `base_document`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chuc_vu`
--
ALTER TABLE `chuc_vu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `giaymoi`
--
ALTER TABLE `giaymoi`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phong_ban`
--
ALTER TABLE `phong_ban`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `vanban`
--
ALTER TABLE `vanban`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `xu_ly`
--
ALTER TABLE `xu_ly`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `base_document`
--
ALTER TABLE `base_document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `chuc_vu`
--
ALTER TABLE `chuc_vu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `conversation`
--
ALTER TABLE `conversation`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `giaymoi`
--
ALTER TABLE `giaymoi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `message`
--
ALTER TABLE `message`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `phong_ban`
--
ALTER TABLE `phong_ban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `vanban`
--
ALTER TABLE `vanban`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `xu_ly`
--
ALTER TABLE `xu_ly`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
