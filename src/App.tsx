import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  age: z.number().min(18, "Must be at least 18").max(100, "Must be at most 100"),
});

type UserFormData = z.infer<typeof userSchema>;

const testData: UserFormData = {
  name: "YoLoo", // at least 1 char
  email: "asd@d.ai", //REQ: email format form
  password: "secreeeeeeeeeeeet", // atleast 6 char
  age: 100, // age > 18 && age < 101
};

const result = userSchema.safeParse(testData);

if (result.success) {
  console.log("✅ Valid:", result.data);
} else {
  console.log("❌ Errors:", result.error.issues);
}

function App() {
  return <h1>Check the console</h1>;
}

export default App;