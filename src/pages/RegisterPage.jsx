import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Heading,
    Textarea,
    Button,
    Box,
    Flex,
    FormErrorMessage,
    Text
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from 'yup';

function RegisterPage() {

    // state for view icon
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const handlePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleRePassword = () => {
        setShowRePassword(!showRePassword);
    }

    // validate form
    const validationSchema = Yup.object().shape({
        fullName: Yup
            .string()
            .required("Vui lòng nhập Họ tên"),
        idNumber: Yup
            .string()
            .required("Vui lòng nhập Số CCCD"),
        address: Yup
            .string()
            .required("Vui lòng nhập Địa chỉ thường trú"),
        phone: Yup
            .string()
            .required("Vui lòng nhập Số điện thoại")
            .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                "Số điện thoại không hợp lệ"),
        email: Yup
            .string()
            .required("Vui lòng nhập Email")
            .email(),
        password: Yup
            .string()
            .required("Vui lòng nhập Mật khẩu")
            .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
        repassword: Yup
            .string()
            .required("Vui lòng nhập Xác nhận mật khẩu")
            .oneOf([Yup.ref('password'), null], "Mật khẩu không khớp"),
    });

    return (
        <Flex justifyContent={"center"} alignItems={"center"} >
            <Box
                width={"40%"}
                m={"3"}
            >
                <Heading
                    color={"#f5897e"}
                    as={"h1"}
                    fontSize={"24px"}
                    pb={"24px"}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    ĐĂNG KÝ TÀI KHOẢN
                </Heading>
                <Formik
                    initialValues={{
                        fullName: "",
                        idNumber: "",
                        address: "",
                        phone: "",
                        email: "",
                        password: "",
                        repassword: "",

                    }}
                    onSubmit={ async (values) => {
                        console.log(values)
                        try {
                          const response = await axios.post("", values);
                          console.log(response);
                        } catch (error) {
                          console.log(error);
                        }
                    }}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            <Field name='fullName'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.fullName && form.touched.fullName}
                                        mb={"4"}
                                    >
                                        <FormLabel>Họ tên</FormLabel>
                                        <Input
                                            {...field}
                                        />
                                        <FormErrorMessage>{form.errors.fullName}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='idNumber'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.idNumber && form.touched.idNumber}
                                        mb={"4"}
                                    >
                                        <FormLabel>Số CCCD</FormLabel>
                                        <Input
                                            {...field}
                                        />
                                        <FormErrorMessage>{form.errors.idNumber}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='address'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.address && form.touched.address}
                                        mb={"4"}
                                    >
                                        <FormLabel>Địa chỉ thường trú</FormLabel>
                                        <Textarea
                                            {...field}
                                        />
                                        <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='phone'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.phone && form.touched.phone}
                                        mb={"4"}
                                    >
                                        <FormLabel>Số điện thoại</FormLabel>
                                        <Input
                                            {...field}
                                        />
                                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='email'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.email && form.touched.email}
                                        mb={"4"}
                                    >
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            {...field}
                                        />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='password'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.password && form.touched.password}
                                        mb={"4"}
                                    >
                                        <FormLabel>Mật khẩu</FormLabel>
                                        <InputGroup>
                                            <Input
                                                {...field}
                                                type={!showPassword ? "password" : "text"}
                                            />
                                            <InputRightElement width={"4.5rem"}>
                                                <IconButton
                                                    h={"1.75rem"}
                                                    aria-label="Hiển thị"
                                                    bg={"white"}
                                                    icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                                    onClick={handlePassword}
                                                />
                                            </InputRightElement>
                                        </InputGroup>

                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='repassword'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.repassword && form.touched.repassword}
                                        mb={"4"}
                                    >
                                        <FormLabel>Xác nhận mật khẩu</FormLabel>
                                        <InputGroup>
                                            <Input
                                                {...field}
                                                type={!showRePassword ? "password" : "text"}
                                            />
                                            <InputRightElement width={"4.5rem"}>
                                                <IconButton
                                                    h={"1.75rem"}
                                                    aria-label="Hiển thị"
                                                    bg={"white"}
                                                    icon={showRePassword ? <ViewIcon /> : <ViewOffIcon />}
                                                    onClick={handleRePassword}
                                                />
                                            </InputRightElement>
                                        </InputGroup>

                                        <FormErrorMessage>{form.errors.repassword}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                type="submit"
                                mt={4}
                                colorScheme="blue"
                                bg="#f5897e"
                                _hover={{ bg: "#f56051" }}
                            >
                                Đăng ký
                            </Button>
                            <Text mt={"4"} fontSize={"sm"}>
                                Đã có tài khoản?
                                <a href="/login" style={{ color: "#0000ff" }}> Đăng Nhập</a>
                            </Text>
                        </Form>
                    )}

                    {/*  */}
                </Formik>
            </Box>
        </Flex>
    );
}

export default RegisterPage;