import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h2 className="text-3xl font-semibold text-center my-10">My Todos</h2>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
