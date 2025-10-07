import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from "./TaskForm.module.css"
import { useTranslation } from 'react-i18next'
import { MdOutlineAdd } from 'react-icons/md';

function TaskForm({onAdd}) {
    const { t } = useTranslation()
    const FeedbackSchema = Yup.object().shape({
    text: Yup.string().min(5, t("errorTooShort")).max(100, t("errorTooLong")).required(t("errorRequired")),
    priority: Yup.string().oneOf(["High", "Medium", "Low"]).required(t("errorRequired")),
    deadline: Yup.date().nullable().min(new Date(), t("errorDeadline"))
})
    
    const handleSubmit = (values, actions) => {
        onAdd(values.text, values.priority, values.deadline || null)
        actions.resetForm()
    }

    return (
        <Formik onSubmit={handleSubmit} initialValues={{text: "", priority: "Medium", deadline: ""}} validationSchema={FeedbackSchema}>
            <Form className={styles.form}>
                <div className={styles.formWrapper}>
                    <div className={styles.formField}> 
                        <label htmlFor="text">{t("addTask")}:</label>
                        <Field type="text" name="text" placeholder={t("taskPlaceholder")} />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="priority">{t("priority")}:</label>
                        <Field as="select" name="priority">
                            <option value="High">{t("priorityHigh")}</option>
                            <option value="Medium">{t("priorityMedium")}</option>
                            <option value="Low">{t("priorityLow")}</option>
                        </Field>
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="deadline">{t("dateTime")}:</label>
                        <Field type="datetime-local" name="deadline"></Field>
                    </div>
                    <button type="submit">
                        <MdOutlineAdd size={24} color="black"></MdOutlineAdd>
                    </button>
                </div>
                <ErrorMessage name='text' component='span' style={{ color: "red", fontSize: "0.8rem" }} />
                <ErrorMessage name='deadline' component='span' style={{ color: "red", fontSize: "0.8rem" }} />
            </Form>
        </Formik>
        
    )
}

export default TaskForm