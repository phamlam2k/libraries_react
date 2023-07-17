import prisma from ".";

export interface IParamsGetCalendarDataPrisma {
  page: number;
  limit: number;
  keyword: string;
}

export const getCalendarDataPrisma = async (
  params: IParamsGetCalendarDataPrisma
) => {
  try {
    const { page, limit, keyword } = params;

    const calendar = await prisma.calendar.findMany({
      where: {
        name: {
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
