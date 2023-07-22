import prisma from ".";

export interface IParamsGetCalendarDataPrisma {
  page: number;
  limit: number;
  keyword: string;
}

export interface IParamsCreateCalendarDataPrisma {
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

export interface IParamsUpdateCalendarDataPrisma {
  id: number;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

export const getCalendarDataPrisma = async (
  params: IParamsGetCalendarDataPrisma
) => {
  try {
    const { page, limit, keyword } = params;

    const calendar = await prisma.calendar.findMany({
      where: {
        title: {
          contains: keyword,
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { calendar };
  } catch (error) {
    return { error };
  }
};

export const createCalendarDataPrisma = async (
  data: IParamsCreateCalendarDataPrisma
) => {
  try {
    const calendar = await prisma.calendar.create({
      data,
    });

    return { calendar, message: "Create calendar success" };
  } catch (error) {
    return { error };
  }
};

export const updateCalendarDataPrisma = async (
  data: IParamsUpdateCalendarDataPrisma
) => {
  try {
    const calendar = await prisma.calendar.update({
      where: {
        id: data.id,
      },
      data,
    });

    return { calendar, message: "Update calendar success" };
  } catch (error) {
    return { error };
  }
};
