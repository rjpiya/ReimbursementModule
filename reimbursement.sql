-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2020 at 12:16 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reimbursementmodule`
--

-- --------------------------------------------------------

--
-- Table structure for table `reimbursement`
--

CREATE TABLE `reimbursement` (
  `id` int(11) NOT NULL,
  `input_option_mode` varchar(20) NOT NULL,
  `from_date` datetime NOT NULL,
  `to_date` datetime NOT NULL,
  `purpose` varchar(20) NOT NULL,
  `mode` varchar(20) NOT NULL,
  `kilometer` int(11) NOT NULL,
  `invoice_number` varchar(20) NOT NULL,
  `amount` float NOT NULL,
  `hotel_name` varchar(20) NOT NULL,
  `from_source` varchar(20) NOT NULL,
  `to_destination` varchar(20) NOT NULL,
  `attached_document_path` varchar(50) NOT NULL,
  `other_description` varchar(50) NOT NULL,
  `created_date_time` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_date_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reimbursement`
--

INSERT INTO `reimbursement` (`id`, `input_option_mode`, `from_date`, `to_date`, `purpose`, `mode`, `kilometer`, `invoice_number`, `amount`, `hotel_name`, `from_source`, `to_destination`, `attached_document_path`, `other_description`, `created_date_time`, `modified_date_time`) VALUES
(1, 'Hotel', '2020-01-01 00:00:00', '2020-01-02 00:00:00', '', '', 0, 'sx213', 5000, 'aangn', '', '', '/img1', '', '2020-09-15 15:46:10', '2020-09-15 15:46:10'),
(2, 'Hotel', '2020-01-01 00:00:00', '2020-01-02 00:00:00', '', '', 0, 'sx214', 5000, 'Amantran', '', '', '/img2', '', '2020-09-15 15:46:10', '2020-09-15 15:46:10'),
(3, 'Conveyance', '2020-02-01 00:00:00', '2020-02-02 00:00:00', 'Training', 'Bike', 100, 'sx213', 5000, '', 'Mumbai', 'Pune', '/img1', '', '2020-09-15 15:46:26', '2020-09-15 15:46:26'),
(4, 'Conveyance', '2020-02-07 00:00:00', '2020-02-08 00:00:00', 'Training', 'Train', 500, 'sx2145', 5000, '', 'Delhi', 'Baanglore', '/img2', '', '2020-09-15 15:46:26', '2020-09-15 15:46:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reimbursement`
--
ALTER TABLE `reimbursement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `input_option_id` (`input_option_mode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reimbursement`
--
ALTER TABLE `reimbursement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
