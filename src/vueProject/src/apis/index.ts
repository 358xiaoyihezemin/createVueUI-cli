const TEST_BASE_URL = process.env.TEST_BASE_URL;
export const TestApi = {
    getPaper: `${TEST_BASE_URL}/shop-partner-talk/paper/getPaper`,
    submitPaper: `${TEST_BASE_URL}/shop-partner-talk/paper/submitPaper`,
    getApplyExam: `${TEST_BASE_URL}/openclass-exam/exam/investmentEntrance/apply`,
    saveUserExamPaperInfo: `${TEST_BASE_URL}/openclass-exam/exam/investmentEntrance/saveUserExamPaperInfo`,
};
