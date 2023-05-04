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
    Grid,
    GridItem,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea
} from "@chakra-ui/react";
// import { NumberFormat }  from "react-number-format";
import { Field, Form, Formik, useFormik } from "formik";
import { useState, useEffect } from "react";

import * as Yup from "yup";
import axios from "axios";
import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const CreateProductPage = () => {

    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [commune, setCommune] = useState([]);
    const [endDatee, setEndDatee] = useState(
        moment().add(7, "days").toDate()
    )

    useEffect(() => {
        const fetchProvince = async () => {
            const result = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
            setProvince(result.data);
        };

        fetchProvince();
    }, []);

    const handleProvinceChange = (e) => {
        const provinceName = e.target.value;
        const result = province.find((c) => c.Name === provinceName);
        setDistrict(result.Districts);
        setCommune([]);
    }

    const handleDistrictChange = (e) => {
        const districtName = e.target.value;
        const result = district.find((d) => d.Name === districtName);
        setCommune(result.Wards);
    }

    const handleEndDateeChange = (date) => {
        setEndDatee(date);
        
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Vui lòng nhập tiêu đề cho bài viết"),
        species: Yup.string().required('Vui lòng chọn trường này').oneOf(['Chó', 'Mèo', 'Chuột Hamster', 'Khác'], "Vui lòng chọn trường này"),
        genre: Yup.string().required('Vui lòng chọn trường này').oneOf(['Đực', 'Cái'], "Vui lòng chọn trường này"),
        weight: Yup
            .number()
            .required('Vui lòng chọn trường này')
            .positive('Cân nặng phải là một số dương'),
        age: Yup
            .number()
            .required('Vui lòng chọn trường này')
            .positive('Tuổi phải là một số dương'),
        price: Yup
            .number()
            .required('Vui lòng chọn trường này')
            .positive('Tuổi phải là một số dương'),
        vaccination: Yup
            .string()
            .required('Vui lòng chọn trường này')
            .oneOf(['true', 'false'], "Vui lòng chọn trường này"),
        description: Yup.string().required('Vui lòng nhập trường này'),
        province: Yup.string().required('Vui lòng nhập trường này'),
        district: Yup.string().required('Vui lòng nhập trường này'),
        commune: Yup.string().required('Vui lòng nhập trường này'),
        address: Yup.string().required('Vui lòng nhập trường này'),
        // endDate: Yup
        //         .date()
        //         .required('Vui lòng chọn ngày kết thúc')
        //         .min(new Date(), 'Thời gian kết thúc phải không nhỏ hơn ngày hiện tại')
        endDate: Yup.string().required('Vui lòng chọn trường này')
    })

    return (
        <Flex justifyContent={"center"} >
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
                    THÊM BÀI ĐĂNG
                </Heading>
                <Formik
                    initialValues={{
                        title: "",
                        species: "",
                        genre: "",
                        weight: "",
                        age: "",
                        price: "",
                        vaccination: "",
                        description: "",
                        province: "",
                        district: "",
                        commune: "",
                        address: "",
                        endDate: "",
                        image: [],
                    }}
                    onSubmit={
                        async (values) => {
                            console.log(values);
                            try {
                                const response = await axios.post("", values);
                                console.log(response);
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            <Field name="title">
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.title && form.touched.title}
                                        mb={"4"}
                                    >
                                        <FormLabel>Tiêu đề</FormLabel>
                                        <Input
                                            {...field}
                                        />
                                        <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name='species'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.species && form.touched.species}
                                        mb={"4"}
                                    >
                                        <FormLabel>Loại thú cưng</FormLabel>
                                        <Select defaultValue={'mèo'} onChange={(e) => form.setValues({ ...form.values, species: e.target.value })}>
                                            {/* <option value={''} disabled hidden selected >Xin mời chọn</option> */}
                                            <option value={'Mèo'} >Mèo</option>
                                            <option value={'Chó'}>Chó</option>
                                            <option value={'Chuột Hamster'}>Chuột Hamster</option>
                                            <option value={'Khác'}>Thú cưng khác</option>
                                        </Select>
                                        <FormErrorMessage>{form.errors.species}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name='genre'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.genre && form.touched.genre}
                                        mb={"4"}
                                    >
                                        <FormLabel>Giới tính</FormLabel>
                                        <RadioGroup
                                            {...field}
                                            onChange={(value) => form.setValues({ ...form.values, genre: value })}
                                        >
                                            <Radio value="Đực">Giống đực</Radio>
                                            <Radio value="Cái" pl={"30%"}>Giống cái</Radio>
                                        </RadioGroup>
                                        <FormErrorMessage>{form.errors.genre}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
                                <GridItem>
                                    <Field name='weight'>
                                        {({ field, form }) => (
                                            <FormControl
                                                isRequired
                                                isInvalid={form.errors.weight && form.touched.weight}
                                                mb={"4"}
                                            >
                                                <FormLabel>Cân nặng (kg)</FormLabel>
                                                <NumberInput
                                                    // {...field}
                                                    value={form.values.weight}
                                                    onChange={(valueNumber) => form.setValues({ ...form.values, weight: valueNumber })}
                                                    min={0} precision={2} step={0.2}
                                                >
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                                <FormErrorMessage>{form.errors.weight}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </GridItem>

                                <GridItem>
                                    <Field name='age'>
                                        {({ field, form }) => (
                                            <FormControl
                                                isRequired
                                                isInvalid={form.errors.age && form.touched.age}
                                                mb={"4"}
                                            >
                                                <FormLabel>Tuổi </FormLabel>

                                                <NumberInput
                                                    // {...field}
                                                    value={form.values.age}
                                                    onChange={(valueNumber) => form.setValues({ ...form.values, age: valueNumber })}
                                                    min={0} step={1}
                                                >
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                                <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </GridItem>
                            </Grid>

                            <Field name='price'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.price && form.touched.price}
                                        mb={"4"}
                                    >
                                        <FormLabel>Giá (VNĐ)</FormLabel>
                                        <NumberInput
                                            // {...field}
                                            value={form.values.price}
                                            onChange={(valueNumber) => form.setValues({ ...form.values, price: valueNumber })}
                                            min={0} step={1000}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name='vaccination'>
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.vaccination && form.touched.vaccination}
                                        mb={"4"}
                                    >
                                        <FormLabel>Tiêm phòng</FormLabel>
                                        <RadioGroup
                                            {...field}
                                            onChange={(value) => form.setValues({ ...form.values, vaccination: value })}
                                        >
                                            {/* <Grid templateColumns={'repeat(3, 1fr'}>
                                                <GridItem>
                                                    <Radio value="1">Đã tiêm chủng</Radio>
                                                </GridItem>
                                                <GridItem>
                                                    <Radio value="0">Chưa tiêm chủng</Radio>
                                                </GridItem>
                                                
                                            </Grid> */}
                                            <Radio value="true">Đã tiêm chủng</Radio>
                                            <Radio value="false" pl={"30%"}>Chưa tiêm chủng</Radio>
                                        </RadioGroup>
                                        <FormErrorMessage>{form.errors.vaccination}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="description">
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.description && form.touched.description}
                                        mb={"4"}
                                    >
                                        <FormLabel>Mô tả</FormLabel>
                                        <Textarea
                                            {...field}
                                            placeholder="Hãy cho mọi người biết về thú cưng của bạn như: Tính cách, thói quen,..."
                                        />
                                        <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <FormLabel>Địa chỉ hiển thị</FormLabel>

                            <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
                                <GridItem>
                                    <Field name='province'>
                                        {({ field, form }) => (
                                            <FormControl

                                                isInvalid={form.errors.province && form.touched.province}
                                                mb={"4"}
                                            >
                                                <FormLabel></FormLabel>
                                                <Select placeholder="Chọn tỉnh thành"
                                                    onChange={(e) => {
                                                        handleProvinceChange(e);
                                                        form.setValues({ ...form.values, province: e.target.value });
                                                    }}>
                                                    {province.map((c) => (
                                                        <option key={c.Id} value={c.Name}>{c.Name}</option>
                                                    ))}
                                                </Select>
                                                <FormErrorMessage>{form.errors.province}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </GridItem>

                                <GridItem>
                                    <Field name='district'>
                                        {({ field, form }) => (
                                            <FormControl

                                                isInvalid={form.errors.district && form.touched.district}
                                                mb={"4"}
                                            >
                                                <FormLabel></FormLabel>
                                                <Select placeholder="Chọn quận huyện"
                                                    onChange={(e) => {
                                                        handleDistrictChange(e);
                                                        form.setValues({ ...form.values, district: e.target.value });
                                                    }}>
                                                    {district.map((c) => (
                                                        <option key={c.Id} value={c.Name}>{c.Name}</option>
                                                    ))}
                                                </Select>
                                                <FormErrorMessage>{form.errors.district}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </GridItem>

                                <GridItem>
                                    <Field name='commune'>
                                        {({ field, form }) => (
                                            <FormControl

                                                isInvalid={form.errors.commune && form.touched.commune}
                                                mb={"4"}
                                            >
                                                <FormLabel></FormLabel>
                                                <Select placeholder="Chọn phường xã"
                                                    onChange={(e) => form.setValues({ ...form.values, commune: e.target.value })}>
                                                    {commune.map((c) => (
                                                        <option key={c.Id} value={c.Name}>{c.Name}</option>
                                                    ))}
                                                </Select>
                                                <FormErrorMessage>{form.errors.commune}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </GridItem>
                            </Grid>

                            <Field name="address">
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.address && form.touched.address}
                                        mb={"4"}
                                    >
                                        <FormLabel>Địa chỉ chi tiết</FormLabel>
                                        <Input
                                            {...field}
                                            placeholder="Hãy ghi chi tiết về địa chỉ của bạn như : số nhà, đường, gần địa điểm lớn nào"
                                        />
                                        <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="endDate">
                                {({ field, form }) => (
                                    <FormControl
                                        isRequired
                                        isInvalid={form.errors.endDate && form.touched.endDate}
                                        mb={"4"}
                                    >
                                        <FormLabel>Thời gian kết thúc hiển thị</FormLabel>
                                        <DatePicker
                                            selected={endDatee}
                                            // onChange={(value) => form.setValues({...form.values, endDate: value})}
                                            onChange={(date) => {
                                                handleEndDateeChange(date);
                                                form.setValues({...form.values, endDate: date.toString()})
                                            }}
                                            minDate={moment().toDate()}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                        <FormErrorMessage>{form.errors.endDate}</FormErrorMessage>
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
                                Đăng bài viết
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>

        </Flex>
    )
}

export default CreateProductPage;