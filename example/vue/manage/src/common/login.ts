import { manageLogin } from '@/api/login';
const login = async () => {
  const res = await manageLogin();
  console.log(res);
};
