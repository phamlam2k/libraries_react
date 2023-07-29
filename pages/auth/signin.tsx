import { ReactNode } from "react";
import { Box, Button } from "@mui/material";
import AuthLayout from "../../src/layout/AuthLayout";

import { useSession, signIn, getProviders } from "next-auth/react";
import { getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next";
import { authOptions } from "../api/auth/[...nextauth]";

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <Box>
      <Button onClick={() => signIn()}>Sign In</Button>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;

export default LoginPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
