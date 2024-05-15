import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-2xl">
      <Skeleton height="1.75rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
