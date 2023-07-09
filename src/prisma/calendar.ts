import prisma from ".";

export const getCalendarDataPrisma = async () => {
  try {
    const calendar = await prisma.calendar.findMany();

    return { calendar };
  } catch (error) {
    return { error };
  }
};
