import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Text
}
    from '@chakra-ui/react';
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React from 'react';

const LoginPage = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .required("Vui lòng nhập Email")
            .matches(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                "Email phải đúng định dạng"),
        password: Yup
            .string()
            .required("Vui lòng nhập Mật khẩu")
            .min(8, "Mật khẩu cần ít nhất 8 ký tự")
    });

    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            pt={"7%"}
        >
            <Box
                w="400px"
                p={4}
                borderWidth="1px"
                borderRadius="lg"

            >
                <Flex justifyContent={'center'}>
                    <Heading color={"#f5897e"} as={"h1"} fontSize={"24px"} pb={"24px"}>
                        ĐĂNG NHẬP
                    </Heading>
                </Flex>

                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={async (values) => {
                        console.log(values)
                        try {
                            const response = await axios.post("", values);
                            console.log(response);
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            <Field name='email'>
                                {({ field, form }) =>
                                    <FormControl isInvalid={form.errors.email && form.touched.email} mb={4}>
                                        <FormLabel>Email</FormLabel>
                                        <Input {...field} placeholder='Nhập email' />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                }
                            </Field>

                            <Field name='password'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password} mb={4}>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                            <Input {...field}
                                                type={show ? 'text' : 'password'}
                                                placeholder='Nhập mật khẩu' />
                                            <InputRightElement width={"4.5rem"}>
                                                <IconButton
                                                    h={"1.75rem"}
                                                    aria-label="Hiển thị"
                                                    bg={"white"}
                                                    icon={show ? <ViewIcon /> : <ViewOffIcon />}
                                                    onClick={handleClick}
                                                />
                                            </InputRightElement>
                                        </InputGroup>

                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Text mt={"4"} fontSize={"sm"}>
                                Chưa có tài khoản?
                                <a href="/register" style={{ color: "#0000ff" }}> Đăng ký</a>
                            </Text>

                            <Button
                                type="submit"
                                colorScheme="blue"
                                bg="#f5897e"
                                _hover={{ bg: "#f56051" }}
                                mt={4}
                            >
                                Đăng nhập
                            </Button>
                        </Form>
                    )}
                </Formik>

            </Box>
        </Flex>

    );
};

export default LoginPage;
