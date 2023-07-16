import prisma from ".";

export interface IParamsGetProductDataPrisma {
  page: number;
  limit: number;
  keyword: string;
}

export interface IProductCreateDataPrisma {
  name: string;
  price: string;
}

export const getProductDataPrisma = async (
  params: IParamsGetProductDataPrisma
) => {
  try {
    const { page, limit, keyword } = params;

    const product = await prisma.product.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { product };
  } catch (error) {
    return { error };
  }
};

export const createProduct = async (formData: IProductCreateDataPrisma) => {
  try {
    const { name, price } = formData;

    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });

    return { message: "Product create successfully", data: product };
  } catch (error) {
    return { error };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const product = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return { message: "Product delete successfully", data: product };
  } catch (error) {
    return { error };
  }
};

export const deleteManyProduct = async (ids: number[]) => {
  try {
    const product = await prisma.product.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return { message: "Product delete successfully", data: product };
  } catch (error) {
    return { error };
  }
};
