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
    Text,
    NumberInput,
    NumberInputField,
    Select,
    RadioGroup,
    Radio,
} from "@chakra-ui/react";
// import { NumberFormat }  from "react-number-format";
import { Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";

import * as Yup from "yup";
import axios from "axios";
import React from "react";


const CreateProductPage = () => {

    const [gender, setGender] = useState('male');
    const [price, setPrice] = useState(0);

    const formatPrice = (price) => {
        console.log(price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
        return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }

    const handlePrice = () => {
        setPrice(price);
    }
    return (
        <Box
            width={"40%"}
            m={"3"}
        // display={"flex"}
        // justifyContent={"center"}
        // alignItems={"center"}
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
            <Formik>
                {(props) => (
                    <Form>
                        <Field name='type'>
                            {({ field, form }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={form.errors.type && form.touched.type}
                                    mb={"4"}
                                >
                                    <FormLabel>Loại thú cưng</FormLabel>
                                    <Select defaultValue={'cat'}>
                                        {/* <option value={''} disabled hidden selected >Xin mời chọn</option> */}
                                        <option value={'cat'} >Mèo</option>
                                        <option value={'dog'}>Chó</option>
                                        <option value={'anotherPet'}>Thú cưng khác</option>
                                    </Select>
                                    <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='gender'>
                            {({ field, form }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={form.errors.gender && form.touched.gender}
                                    mb={"4"}
                                >
                                    <FormLabel>Giới tính</FormLabel>
                                    <RadioGroup onChange={setGender} value={gender}>
                                        <Radio value="male">Giống đực</Radio>
                                        <Radio value="female" pl={"30%"}>Giống cái</Radio>
                                    </RadioGroup>
                                    <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='weight'>
                            {({ field, form }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={form.errors.weight && form.touched.weight}
                                    mb={"4"}
                                >
                                    <FormLabel>Cân nặng</FormLabel>
                                    
                                    <NumberInput
                                        {...field}

                                    >
                                        <NumberInputField />
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.weight}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='price'>
                            {({ field, form }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={form.errors.price && form.touched.price}
                                    mb={"4"}
                                >
                                    <FormLabel>Giá</FormLabel>
                                    <NumberInput
                                        {...field}
                                        defaultValue={0}
                                        format={formatPrice}
                                    >
                                        <NumberInputField />
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='price'>
                            {({ field, form }) => (
                                <FormControl
                                    isRequired
                                    isInvalid={form.errors.price && form.touched.price}
                                    mb={"4"}
                                >
                                    <FormLabel>Giá</FormLabel>
                                    <NumberInput
                                        {...field}
                                        defaultValue={0}
                                        format={formatPrice}
                                    >
                                        <NumberInputField />
                                    </NumberInput>
                                    <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>


                    </Form>
                )}
            </Formik>
        </Box>

    )
}

export default CreateProductPage;