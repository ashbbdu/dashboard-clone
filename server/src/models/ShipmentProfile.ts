import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import sequelize from "../database/database";

export class ShipmentProfile extends Model {
  public shipment_uid!: number;
  public company!: string | null;
  public shipment_id!: string | null;
  public old_ref_no!: string | null;
  public s_year!: number | null;
  public trans!: string | null;
  public customs_info!: string | null;
  public mode!: string | null;
  public origin!: string | null;
  public origin_country!: string | null;
  public destination!: string | null;
  public destination_country!: string | null;
  public consignor_code!: string | null;
  public consignor_name!: string | null;
  public consignee_code!: string | null;
  public consignee_name!: string | null;
  public house_ref!: string | null;
  public inco!: string | null;
  public additional_terms!: string | null;
  public ppd_ccx!: string | null;
  public goods_description!: string | null;
  public origin_etd!: Date | null;
  public destination_eta!: Date | null;
  public weight!: number | null;
  public weight_uq!: string | null;
  public volume!: number | null;
  public volume_uq!: string | null;
  public loading_meters!: number | null;
  public chargeable!: number | null;
  public chargeable_unit_uq!: string | null;
  public inner_packets!: number | null;
  public inner_unit_uq!: string | null;
  public outer_packets!: number | null;
  public outers_unit_uq!: string | null;
  public added_date!: Date | null;
  public controlling_customer_code!: string | null;
  public controlling_customer_name!: string | null;
  public controlling_agent_code!: string | null;
  public controlling_agent_name!: string | null;
  public transport_job!: string | null;
  public brokerage_job!: string | null;
  public is_master_lead!: string | null;
  public master_lead_ref!: string | null;
  public import_broker_code!: string | null;
  public import_broker_name!: string | null;
  public export_broker_code!: string | null;
  public export_broker_name!: string | null;
  public job_branch!: string | null;
  public job_dept!: string | null;
  public local_client_code!: string | null;
  public local_client_name!: string | null;
  public job_sales_rep!: string | null;
  public job_operator!: string | null;
  public job_status!: string | null;
  public job_opened!: Date | null;
  public recognized_revenue!: number | null;
  public recognized_wip!: number | null;
  public total_recognized_income_rev_wip!: number | null;
  public recognized_cost!: number | null;
  public recognized_accrual!: number | null;
  public total_recognized_expense_cst_acr!: number | null;
  public job_profit!: number | null;
  public consol_id!: string | null;
  public first_load!: string | null;
  public last_discharge!: string | null;
  public etd_first_load!: Date | null;
  public eta_last_discharge!: Date | null;
  public master_bl!: string | null;
  public vessel!: string | null;
  public flight_voyage!: string | null;
  public load_port!: string | null;
  public discharge!: string | null;
  public etd_load!: Date | null;
  public eta_discharge!: Date | null;
  public sending_agent_code!: string | null;
  public sending_agent_name!: string | null;
  public receiving_agent!: string | null;
  public receiving_agent_name!: string | null;
  public co_loaded_with!: string | null;
  public co_loader_name!: string | null;
  public carrier_code!: string | null;
  public carrier_name!: string | null;
  public teu!: number | null;
  public container_count!: number | null;
  public other!: number | null;
  public c20f!: number | null;
  public c20r!: number | null;
  public c20h!: number | null;
  public c40f!: number | null;
  public c40r!: number | null;
  public c40h!: number | null;
  public c45f!: number | null;
  public gen!: number | null;
  public service_level_code!: string | null;
  public shippers_reference!: string | null;
  public consignor_city!: string | null;
  public consignor_state!: string | null;
  public consignor_postcode!: string | null;
  public consignee_city!: string | null;
  public consignee_state!: string | null;
  public consignee_postcode!: string | null;
  public consol_atd!: Date | null;
  public consol_ata!: Date | null;
  public job_revenue_recognition_date!: string | null;
  public direction!: string | null;
  public local_client_ar_settlement_group_code!: string | null;
  public local_client_ar_settlement_group_name!: string | null;
  public overseas_agent_code!: string | null;
  public overseas_agent_name!: string | null;
  public job_overseas_agent_ar_settlement_group_code!: string | null;
  public job_overseas_agent_ar_settlement_group_name!: string | null;
  public commodity!: string | null;
  public contract_no!: string | null;
  public actual_cartage_delivery_date_time!: Date | null;
  public actual_cartage_delivery_date!: Date | null;
  public delivery_cartage_advised_date_time!: Date | null;
  public delivery_cartage_advised_date!: Date | null;
  public cartage_deliver_by_date_time!: Date | null;
  public cartage_deliver_by_date!: Date | null;
  public cartage_drop_mode!: string | null;
  public est_cartage_delivery_date_time!: Date | null;
  public est_cartage_delivery_date!: Date | null;
  public house_bill_type!: string | null;
  public is_active!: string | null;
  public total_accrual_recognized_unrecognized!: number | null;
  public total_cost_recognized_unrecognized!: number | null;
  public total_expense_recognized_unrecognized_cst_acr!: number | null;
  public total_income_recognized_unrecognized_rev_wip!: number | null;
  public total_revenue_recognized_unrecognized!: number | null;
  public total_unrecognized_expense_cst_acr!: number | null;
  public total_unrecognized_income_rev_wip!: number | null;
  public total_wip_recognized_unrecognized!: number | null;
  public unrecognized_accrual!: number | null;
  public unrecognized_cost!: number | null;
  public unrecognized_revenue!: number | null;
  public unrecognized_wip!: number | null;
  public actual_pickup_date_time!: Date | null;
  public actual_pickup_date!: Date | null;
  public pickup_cartage_advised_date_time!: Date | null;
  public pickup_cartage_advised_date!: Date | null;
  public cartage_pickup_mode!: string | null;
  public interim_receipt!: string | null;
  public interim_receipt_no!: string | null;
  public pickup_by_date_time!: string | null;
  public pickup_by_date!: string | null;
  public pickup_from_date_time!: string | null;
  public pickup_from_date!: string | null;
  public controlling_rep!: string | null;
  public created_at!: Date | null;
  public updated_at!: Date | null;
}

ShipmentProfile.init(
  {
    shipment_uid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    shipment_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: true,
    },
    old_ref_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    s_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    trans: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    customs_info: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    mode: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    origin_country: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    destination_country: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignor_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignor_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    consignee_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignee_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    house_ref: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    inco: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    additional_terms: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    ppd_ccx: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    goods_description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    origin_etd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    destination_eta: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    weight_uq: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    volume_uq: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    loading_meters: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    chargeable: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    chargeable_unit_uq: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    inner_packets: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    inner_unit_uq: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    outer_packets: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    outers_unit_uq: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    controlling_customer_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    controlling_customer_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    controlling_agent_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    controlling_agent_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    transport_job: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    brokerage_job: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    is_master_lead: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    master_lead_ref: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    import_broker_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    import_broker_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    export_broker_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    export_broker_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    job_branch: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    job_dept: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    local_client_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    local_client_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    job_sales_rep: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    job_operator: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    job_status: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    job_opened: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    recognized_revenue: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    recognized_wip: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_recognized_income_rev_wip: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    recognized_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    recognized_accrual: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_recognized_expense_cst_acr: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    job_profit: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    consol_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    first_load: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    last_discharge: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    etd_first_load: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    eta_last_discharge: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    master_bl: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    vessel: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    flight_voyage: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    load_port: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    discharge: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    etd_load: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    eta_discharge: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sending_agent_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    sending_agent_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    receiving_agent: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    receiving_agent_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    co_loaded_with: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    co_loader_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    carrier_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    carrier_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    teu: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    container_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    other: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c20f: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c20r: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c20h: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c40f: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c40r: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c40h: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c45f: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    service_level_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    shippers_reference: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignor_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    consignor_state: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignor_postcode: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignee_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    consignee_state: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consignee_postcode: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    consol_atd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    consol_ata: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    job_revenue_recognition_date: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    direction: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    local_client_ar_settlement_group_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    local_client_ar_settlement_group_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    overseas_agent_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    overseas_agent_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    job_overseas_agent_ar_settlement_group_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    job_overseas_agent_ar_settlement_group_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    commodity: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    contract_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    actual_cartage_delivery_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    actual_cartage_delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delivery_cartage_advised_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delivery_cartage_advised_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cartage_deliver_by_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cartage_deliver_by_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cartage_drop_mode: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    est_cartage_delivery_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    est_cartage_delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    house_bill_type: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    total_accrual_recognized_unrecognized: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_cost_recognized_unrecognized: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_expense_recognized_unrecognized_cst_acr: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_income_recognized_unrecognized_rev_wip: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_revenue_recognized_unrecognized: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_unrecognized_expense_cst_acr: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_unrecognized_income_rev_wip: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    total_wip_recognized_unrecognized: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unrecognized_accrual: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unrecognized_cost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unrecognized_revenue: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unrecognized_wip: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    actual_pickup_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    actual_pickup_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    pickup_cartage_advised_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    pickup_cartage_advised_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cartage_pickup_mode: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    interim_receipt: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    interim_receipt_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pickup_by_date_time: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pickup_by_date: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pickup_from_date_time: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pickup_from_date: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    controlling_rep: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "ShipmentProfile",
    tableName: "shipment_profile",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default ShipmentProfile;
