function page() {
  const handleForm = async (formData) => {
    "use server";

    const username = formData.get("username");
    console.log(username);
    // console.log(formdata);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default page;
