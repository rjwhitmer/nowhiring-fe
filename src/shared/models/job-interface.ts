export interface JobInterface {
    id: number;
    title: string;
    description: string;
    expected_start_date: Date;
    starting_base_salary_range: number;
    ending_base_salary_range: number;
    hourly_wage: number;
    is_hourly_wage: boolean;
    is_active: boolean; 
}
