package web.nl.kltn.model.generator;

import java.util.ArrayList;
import java.util.List;

public class CriticalAssessmentExample {
    /**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	protected String orderByClause;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	protected boolean distinct;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	protected List<Criteria> oredCriteria;

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public CriticalAssessmentExample() {
		oredCriteria = new ArrayList<>();
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public void setOrderByClause(String orderByClause) {
		this.orderByClause = orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public String getOrderByClause() {
		return orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public boolean isDistinct() {
		return distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public List<Criteria> getOredCriteria() {
		return oredCriteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public void or(Criteria criteria) {
		oredCriteria.add(criteria);
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public Criteria or() {
		Criteria criteria = createCriteriaInternal();
		oredCriteria.add(criteria);
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public Criteria createCriteria() {
		Criteria criteria = createCriteriaInternal();
		if (oredCriteria.size() == 0) {
			oredCriteria.add(criteria);
		}
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	protected Criteria createCriteriaInternal() {
		Criteria criteria = new Criteria();
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public void clear() {
		oredCriteria.clear();
		orderByClause = null;
		distinct = false;
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	protected abstract static class GeneratedCriteria {
		protected List<Criterion> criteria;

		protected GeneratedCriteria() {
			super();
			criteria = new ArrayList<>();
		}

		public boolean isValid() {
			return criteria.size() > 0;
		}

		public List<Criterion> getAllCriteria() {
			return criteria;
		}

		public List<Criterion> getCriteria() {
			return criteria;
		}

		protected void addCriterion(String condition) {
			if (condition == null) {
				throw new RuntimeException("Value for condition cannot be null");
			}
			criteria.add(new Criterion(condition));
		}

		protected void addCriterion(String condition, Object value, String property) {
			if (value == null) {
				throw new RuntimeException("Value for " + property + " cannot be null");
			}
			criteria.add(new Criterion(condition, value));
		}

		protected void addCriterion(String condition, Object value1, Object value2, String property) {
			if (value1 == null || value2 == null) {
				throw new RuntimeException("Between values for " + property + " cannot be null");
			}
			criteria.add(new Criterion(condition, value1, value2));
		}

		public Criteria andIdIsNull() {
			addCriterion("id is null");
			return (Criteria) this;
		}

		public Criteria andIdIsNotNull() {
			addCriterion("id is not null");
			return (Criteria) this;
		}

		public Criteria andIdEqualTo(String value) {
			addCriterion("id =", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotEqualTo(String value) {
			addCriterion("id <>", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdGreaterThan(String value) {
			addCriterion("id >", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdGreaterThanOrEqualTo(String value) {
			addCriterion("id >=", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdLessThan(String value) {
			addCriterion("id <", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdLessThanOrEqualTo(String value) {
			addCriterion("id <=", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdLike(String value) {
			addCriterion("id like", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotLike(String value) {
			addCriterion("id not like", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdIn(List<String> values) {
			addCriterion("id in", values, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotIn(List<String> values) {
			addCriterion("id not in", values, "id");
			return (Criteria) this;
		}

		public Criteria andIdBetween(String value1, String value2) {
			addCriterion("id between", value1, value2, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotBetween(String value1, String value2) {
			addCriterion("id not between", value1, value2, "id");
			return (Criteria) this;
		}

		public Criteria andThesisIdIsNull() {
			addCriterion("thesis_id is null");
			return (Criteria) this;
		}

		public Criteria andThesisIdIsNotNull() {
			addCriterion("thesis_id is not null");
			return (Criteria) this;
		}

		public Criteria andThesisIdEqualTo(String value) {
			addCriterion("thesis_id =", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdNotEqualTo(String value) {
			addCriterion("thesis_id <>", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdGreaterThan(String value) {
			addCriterion("thesis_id >", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdGreaterThanOrEqualTo(String value) {
			addCriterion("thesis_id >=", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdLessThan(String value) {
			addCriterion("thesis_id <", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdLessThanOrEqualTo(String value) {
			addCriterion("thesis_id <=", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdLike(String value) {
			addCriterion("thesis_id like", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdNotLike(String value) {
			addCriterion("thesis_id not like", value, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdIn(List<String> values) {
			addCriterion("thesis_id in", values, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdNotIn(List<String> values) {
			addCriterion("thesis_id not in", values, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdBetween(String value1, String value2) {
			addCriterion("thesis_id between", value1, value2, "thesisId");
			return (Criteria) this;
		}

		public Criteria andThesisIdNotBetween(String value1, String value2) {
			addCriterion("thesis_id not between", value1, value2, "thesisId");
			return (Criteria) this;
		}

		public Criteria andContentIsNull() {
			addCriterion("content is null");
			return (Criteria) this;
		}

		public Criteria andContentIsNotNull() {
			addCriterion("content is not null");
			return (Criteria) this;
		}

		public Criteria andContentEqualTo(String value) {
			addCriterion("content =", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentNotEqualTo(String value) {
			addCriterion("content <>", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentGreaterThan(String value) {
			addCriterion("content >", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentGreaterThanOrEqualTo(String value) {
			addCriterion("content >=", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentLessThan(String value) {
			addCriterion("content <", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentLessThanOrEqualTo(String value) {
			addCriterion("content <=", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentLike(String value) {
			addCriterion("content like", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentNotLike(String value) {
			addCriterion("content not like", value, "content");
			return (Criteria) this;
		}

		public Criteria andContentIn(List<String> values) {
			addCriterion("content in", values, "content");
			return (Criteria) this;
		}

		public Criteria andContentNotIn(List<String> values) {
			addCriterion("content not in", values, "content");
			return (Criteria) this;
		}

		public Criteria andContentBetween(String value1, String value2) {
			addCriterion("content between", value1, value2, "content");
			return (Criteria) this;
		}

		public Criteria andContentNotBetween(String value1, String value2) {
			addCriterion("content not between", value1, value2, "content");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsIsNull() {
			addCriterion("analysis_results is null");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsIsNotNull() {
			addCriterion("analysis_results is not null");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsEqualTo(String value) {
			addCriterion("analysis_results =", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsNotEqualTo(String value) {
			addCriterion("analysis_results <>", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsGreaterThan(String value) {
			addCriterion("analysis_results >", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsGreaterThanOrEqualTo(String value) {
			addCriterion("analysis_results >=", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsLessThan(String value) {
			addCriterion("analysis_results <", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsLessThanOrEqualTo(String value) {
			addCriterion("analysis_results <=", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsLike(String value) {
			addCriterion("analysis_results like", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsNotLike(String value) {
			addCriterion("analysis_results not like", value, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsIn(List<String> values) {
			addCriterion("analysis_results in", values, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsNotIn(List<String> values) {
			addCriterion("analysis_results not in", values, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsBetween(String value1, String value2) {
			addCriterion("analysis_results between", value1, value2, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andAnalysisResultsNotBetween(String value1, String value2) {
			addCriterion("analysis_results not between", value1, value2, "analysisResults");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionIsNull() {
			addCriterion("feedback_lecturer_question is null");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionIsNotNull() {
			addCriterion("feedback_lecturer_question is not null");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionEqualTo(String value) {
			addCriterion("feedback_lecturer_question =", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionNotEqualTo(String value) {
			addCriterion("feedback_lecturer_question <>", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionGreaterThan(String value) {
			addCriterion("feedback_lecturer_question >", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionGreaterThanOrEqualTo(String value) {
			addCriterion("feedback_lecturer_question >=", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionLessThan(String value) {
			addCriterion("feedback_lecturer_question <", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionLessThanOrEqualTo(String value) {
			addCriterion("feedback_lecturer_question <=", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionLike(String value) {
			addCriterion("feedback_lecturer_question like", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionNotLike(String value) {
			addCriterion("feedback_lecturer_question not like", value, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionIn(List<String> values) {
			addCriterion("feedback_lecturer_question in", values, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionNotIn(List<String> values) {
			addCriterion("feedback_lecturer_question not in", values, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionBetween(String value1, String value2) {
			addCriterion("feedback_lecturer_question between", value1, value2, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andFeedbackLecturerQuestionNotBetween(String value1, String value2) {
			addCriterion("feedback_lecturer_question not between", value1, value2, "feedbackLecturerQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionIsNull() {
			addCriterion("council_question is null");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionIsNotNull() {
			addCriterion("council_question is not null");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionEqualTo(String value) {
			addCriterion("council_question =", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionNotEqualTo(String value) {
			addCriterion("council_question <>", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionGreaterThan(String value) {
			addCriterion("council_question >", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionGreaterThanOrEqualTo(String value) {
			addCriterion("council_question >=", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionLessThan(String value) {
			addCriterion("council_question <", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionLessThanOrEqualTo(String value) {
			addCriterion("council_question <=", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionLike(String value) {
			addCriterion("council_question like", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionNotLike(String value) {
			addCriterion("council_question not like", value, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionIn(List<String> values) {
			addCriterion("council_question in", values, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionNotIn(List<String> values) {
			addCriterion("council_question not in", values, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionBetween(String value1, String value2) {
			addCriterion("council_question between", value1, value2, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andCouncilQuestionNotBetween(String value1, String value2) {
			addCriterion("council_question not between", value1, value2, "councilQuestion");
			return (Criteria) this;
		}

		public Criteria andBehaviorIsNull() {
			addCriterion("behavior is null");
			return (Criteria) this;
		}

		public Criteria andBehaviorIsNotNull() {
			addCriterion("behavior is not null");
			return (Criteria) this;
		}

		public Criteria andBehaviorEqualTo(String value) {
			addCriterion("behavior =", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorNotEqualTo(String value) {
			addCriterion("behavior <>", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorGreaterThan(String value) {
			addCriterion("behavior >", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorGreaterThanOrEqualTo(String value) {
			addCriterion("behavior >=", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorLessThan(String value) {
			addCriterion("behavior <", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorLessThanOrEqualTo(String value) {
			addCriterion("behavior <=", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorLike(String value) {
			addCriterion("behavior like", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorNotLike(String value) {
			addCriterion("behavior not like", value, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorIn(List<String> values) {
			addCriterion("behavior in", values, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorNotIn(List<String> values) {
			addCriterion("behavior not in", values, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorBetween(String value1, String value2) {
			addCriterion("behavior between", value1, value2, "behavior");
			return (Criteria) this;
		}

		public Criteria andBehaviorNotBetween(String value1, String value2) {
			addCriterion("behavior not between", value1, value2, "behavior");
			return (Criteria) this;
		}

		public Criteria andMarkerIsNull() {
			addCriterion("marker is null");
			return (Criteria) this;
		}

		public Criteria andMarkerIsNotNull() {
			addCriterion("marker is not null");
			return (Criteria) this;
		}

		public Criteria andMarkerEqualTo(String value) {
			addCriterion("marker =", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerNotEqualTo(String value) {
			addCriterion("marker <>", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerGreaterThan(String value) {
			addCriterion("marker >", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerGreaterThanOrEqualTo(String value) {
			addCriterion("marker >=", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerLessThan(String value) {
			addCriterion("marker <", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerLessThanOrEqualTo(String value) {
			addCriterion("marker <=", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerLike(String value) {
			addCriterion("marker like", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerNotLike(String value) {
			addCriterion("marker not like", value, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerIn(List<String> values) {
			addCriterion("marker in", values, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerNotIn(List<String> values) {
			addCriterion("marker not in", values, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerBetween(String value1, String value2) {
			addCriterion("marker between", value1, value2, "marker");
			return (Criteria) this;
		}

		public Criteria andMarkerNotBetween(String value1, String value2) {
			addCriterion("marker not between", value1, value2, "marker");
			return (Criteria) this;
		}

		public Criteria andIsDeletedIsNull() {
			addCriterion("is_deleted is null");
			return (Criteria) this;
		}

		public Criteria andIsDeletedIsNotNull() {
			addCriterion("is_deleted is not null");
			return (Criteria) this;
		}

		public Criteria andIsDeletedEqualTo(Boolean value) {
			addCriterion("is_deleted =", value, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedNotEqualTo(Boolean value) {
			addCriterion("is_deleted <>", value, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedGreaterThan(Boolean value) {
			addCriterion("is_deleted >", value, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedGreaterThanOrEqualTo(Boolean value) {
			addCriterion("is_deleted >=", value, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedLessThan(Boolean value) {
			addCriterion("is_deleted <", value, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedLessThanOrEqualTo(Boolean value) {
			addCriterion("is_deleted <=", value, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedIn(List<Boolean> values) {
			addCriterion("is_deleted in", values, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedNotIn(List<Boolean> values) {
			addCriterion("is_deleted not in", values, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedBetween(Boolean value1, Boolean value2) {
			addCriterion("is_deleted between", value1, value2, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andIsDeletedNotBetween(Boolean value1, Boolean value2) {
			addCriterion("is_deleted not between", value1, value2, "isDeleted");
			return (Criteria) this;
		}

		public Criteria andCreatedAtIsNull() {
			addCriterion("created_at is null");
			return (Criteria) this;
		}

		public Criteria andCreatedAtIsNotNull() {
			addCriterion("created_at is not null");
			return (Criteria) this;
		}

		public Criteria andCreatedAtEqualTo(Long value) {
			addCriterion("created_at =", value, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtNotEqualTo(Long value) {
			addCriterion("created_at <>", value, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtGreaterThan(Long value) {
			addCriterion("created_at >", value, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtGreaterThanOrEqualTo(Long value) {
			addCriterion("created_at >=", value, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtLessThan(Long value) {
			addCriterion("created_at <", value, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtLessThanOrEqualTo(Long value) {
			addCriterion("created_at <=", value, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtIn(List<Long> values) {
			addCriterion("created_at in", values, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtNotIn(List<Long> values) {
			addCriterion("created_at not in", values, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtBetween(Long value1, Long value2) {
			addCriterion("created_at between", value1, value2, "createdAt");
			return (Criteria) this;
		}

		public Criteria andCreatedAtNotBetween(Long value1, Long value2) {
			addCriterion("created_at not between", value1, value2, "createdAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtIsNull() {
			addCriterion("updated_at is null");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtIsNotNull() {
			addCriterion("updated_at is not null");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtEqualTo(Long value) {
			addCriterion("updated_at =", value, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtNotEqualTo(Long value) {
			addCriterion("updated_at <>", value, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtGreaterThan(Long value) {
			addCriterion("updated_at >", value, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtGreaterThanOrEqualTo(Long value) {
			addCriterion("updated_at >=", value, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtLessThan(Long value) {
			addCriterion("updated_at <", value, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtLessThanOrEqualTo(Long value) {
			addCriterion("updated_at <=", value, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtIn(List<Long> values) {
			addCriterion("updated_at in", values, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtNotIn(List<Long> values) {
			addCriterion("updated_at not in", values, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtBetween(Long value1, Long value2) {
			addCriterion("updated_at between", value1, value2, "updatedAt");
			return (Criteria) this;
		}

		public Criteria andUpdatedAtNotBetween(Long value1, Long value2) {
			addCriterion("updated_at not between", value1, value2, "updatedAt");
			return (Criteria) this;
		}
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table critical_assessment
	 * @mbg.generated  Mon Jul 17 16:14:00 ICT 2023
	 */
	public static class Criterion {
		private String condition;
		private Object value;
		private Object secondValue;
		private boolean noValue;
		private boolean singleValue;
		private boolean betweenValue;
		private boolean listValue;
		private String typeHandler;

		public String getCondition() {
			return condition;
		}

		public Object getValue() {
			return value;
		}

		public Object getSecondValue() {
			return secondValue;
		}

		public boolean isNoValue() {
			return noValue;
		}

		public boolean isSingleValue() {
			return singleValue;
		}

		public boolean isBetweenValue() {
			return betweenValue;
		}

		public boolean isListValue() {
			return listValue;
		}

		public String getTypeHandler() {
			return typeHandler;
		}

		protected Criterion(String condition) {
			super();
			this.condition = condition;
			this.typeHandler = null;
			this.noValue = true;
		}

		protected Criterion(String condition, Object value, String typeHandler) {
			super();
			this.condition = condition;
			this.value = value;
			this.typeHandler = typeHandler;
			if (value instanceof List<?>) {
				this.listValue = true;
			} else {
				this.singleValue = true;
			}
		}

		protected Criterion(String condition, Object value) {
			this(condition, value, null);
		}

		protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
			super();
			this.condition = condition;
			this.value = value;
			this.secondValue = secondValue;
			this.typeHandler = typeHandler;
			this.betweenValue = true;
		}

		protected Criterion(String condition, Object value, Object secondValue) {
			this(condition, value, secondValue, null);
		}
	}

	/**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table critical_assessment
     *
     * @mbg.generated do_not_delete_during_merge Thu Jul 06 22:50:57 ICT 2023
     */
    public static class Criteria extends GeneratedCriteria {
        protected Criteria() {
            super();
        }
    }
}