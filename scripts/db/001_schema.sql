CREATE DATABASE hotelManagementSystem;
GO

USE [hotelManagementSystem]
GO

/****** Object:  Table [dbo].[userinfo]    Script Date: 7/25/2019 7:41:48 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[userinfo](
	[Id] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](60) NOT NULL,
	[Email] [nvarchar](60) NOT NULL,
	[MobileNo] [int] NOT NULL,
	[AccountCreatedDate] [date] NULL,
	[LastLoginDate] [date] NULL,
	[Role] [nvarchar](30) NULL,
 CONSTRAINT [PK_userinfo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

/****** Object:  Table [dbo].[hotelroominfo]    Script Date: 7/25/2019 7:45:49 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[hotelroominfo](
	[Id] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](300) NOT NULL,
	[MobileNumber] [int] NOT NULL,
	[AvailableAmount] [int] NULL,
	[RequiredPoints] [int] NULL,
	[LastUpdateTs] [datetime] NULL,
 CONSTRAINT [PK_hotelroominfo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

/****** Object:  Table [dbo].[bonuspoints]    Script Date: 7/25/2019 7:49:51 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[bonuspoints](
	[Id] [nvarchar](100) NOT NULL FOREIGN KEY (Id) REFERENCES UserInfo(Id),
	[PointsAccumulated] [int] NULL,
	[PointsLeft] [int] NULL,
	[PointsConsumed] [int] NULL,
	[LastUpdatedTs] [datetime] NULL,
 CONSTRAINT [PK_bonuspoints] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[bonuspoints]  WITH CHECK ADD  CONSTRAINT [FK_bonuspoints_bonuspoints] FOREIGN KEY([Id])
REFERENCES [dbo].[bonuspoints] ([Id])
GO

ALTER TABLE [dbo].[bonuspoints] CHECK CONSTRAINT [FK_bonuspoints_bonuspoints]
GO

/****** Object:  Table [dbo].[bookinginfo]    Script Date: 7/25/2019 7:53:35 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[bookinginfo](
	[BookingId] [nvarchar](100) NOT NULL,
	[UserId] [nvarchar](100) NOT NULL FOREIGN KEY (UserId) REFERENCES UserInfo(Id),
	[RoomId] [nvarchar](100) NOT NULL FOREIGN KEY (RoomId) REFERENCES HotelRoomInfo(Id),
	[Stauts] [nvarchar](50),
	[BookingDate] [datetime] NOT NULL,
 CONSTRAINT [PK_bookinginfo] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO






