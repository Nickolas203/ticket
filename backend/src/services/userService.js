import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {
  // CREATE
  async createUser(data) {
    return await prisma.user.create({ data });
  },

  // READ todos
  async getUsers() {
    return await prisma.user.findMany();
  },

  // READ por ID
  async getUserById(id) {
    return await prisma.user.findUnique({ where: { id } });
  },

  // UPDATE
  async updateUser(id, data) {
    return await prisma.user.update({
      where: { id },
      data
    });
  },

  // DELETE
  async deleteUser(id) {
    return await prisma.user.delete({
      where: { id }
    });
  }
};
