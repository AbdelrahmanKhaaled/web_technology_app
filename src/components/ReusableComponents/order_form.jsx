import {useEffect} from "react"
import "../../styles/ReusableComponents/order_form.css";
import { useTranslation } from "react-i18next";

export default function Order_Form({ showForm, showFormFun, selection }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showForm]);

  const ServiceSelectField = () => (
    <div class="form-group">
      <label>
        {t("serviceDetailsForm1")} <span>*</span>
      </label>
      <select name="service_id" class="form-select">
        <option value="6">{t("serviceDetailsFormList1")}</option>
        <option value="5">{t("serviceDetailsFormList2")}</option>
        <option value="4">{t("serviceDetailsFormList3")}</option>
        <option value="3">{t("serviceDetailsFormList4")}</option>
        <option value="2">{t("serviceDetailsFormList5")}</option>
        <option value="1">{t("serviceDetailsFormList6")}</option>
      </select>
    </div>
  );

  const DescriptionField = () => (
    <div class="form-group">
      <label>
        Description <span>*</span>
      </label>
      <textarea class="form-control" name="message"></textarea>
    </div>
  );

  const ProductSelectField = () => (
    <div class="form-group">
      <label>
        Product <span>*</span>
      </label>
      <select name="product_id" class="form-select">
        <option value="10">ADhmn</option>
        <option value="17">Mishwar</option>
        <option value="19">Circle</option>
      </select>
    </div>
  );

  // 🔥 FIXED conditional injection
  let injection;
  if (selection === "product") {
    injection = <ProductSelectField />;
  } else if (selection === "description") {
    injection = <DescriptionField />;
  } else if (selection === "service") {
    injection = <ServiceSelectField />;
  }

  return (
    <div
      class={`modal fade modalOpenClose ${showForm ? "show" : ""}`}
      onClick={showFormFun}
    >
      <div
        class="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="modal-content">
          <button class="btnClose" onClick={showFormFun}>
            X
          </button>

          <div class="modal-body p-0">
            <form class="form">
              {/* Common fields */}
              <div class="form-group">
                <label>
                  {t("contactForm1")} <span>*</span>
                </label>
                <input type="text" class="form-control" name="name" />
              </div>

              <div class="form-group">
                <label>
                  {t("contactForm2")} <span>*</span>
                </label>
                <input type="email" class="form-control" name="email" />
              </div>

              <div class="form-group">
                <label>
                  {t("contactForm3")} <span>*</span>
                </label>
                <input type="tel" class="form-control" name="phone" />
              </div>

              {/* 🔥 DYNAMIC FIELD HERE */}
              {injection}

              <button type="submit" class="outlineGradient">
                <span>{t("contactForm6")}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
