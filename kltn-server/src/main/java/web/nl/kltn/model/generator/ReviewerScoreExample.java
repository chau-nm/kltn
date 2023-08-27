package web.nl.kltn.model.generator;

import java.util.ArrayList;
import java.util.List;

public class ReviewerScoreExample {
    /**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	protected String orderByClause;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	protected boolean distinct;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	protected List<Criteria> oredCriteria;

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public ReviewerScoreExample() {
		oredCriteria = new ArrayList<>();
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setOrderByClause(String orderByClause) {
		this.orderByClause = orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public String getOrderByClause() {
		return orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public boolean isDistinct() {
		return distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public List<Criteria> getOredCriteria() {
		return oredCriteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void or(Criteria criteria) {
		oredCriteria.add(criteria);
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Criteria or() {
		Criteria criteria = createCriteriaInternal();
		oredCriteria.add(criteria);
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public Criteria createCriteria() {
		Criteria criteria = createCriteriaInternal();
		if (oredCriteria.size() == 0) {
			oredCriteria.add(criteria);
		}
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	protected Criteria createCriteriaInternal() {
		Criteria criteria = new Criteria();
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
	 */
	public void clear() {
		oredCriteria.clear();
		orderByClause = null;
		distinct = false;
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
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

		public Criteria andReviewerIdIsNull() {
			addCriterion("reviewer_id is null");
			return (Criteria) this;
		}

		public Criteria andReviewerIdIsNotNull() {
			addCriterion("reviewer_id is not null");
			return (Criteria) this;
		}

		public Criteria andReviewerIdEqualTo(String value) {
			addCriterion("reviewer_id =", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdNotEqualTo(String value) {
			addCriterion("reviewer_id <>", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdGreaterThan(String value) {
			addCriterion("reviewer_id >", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdGreaterThanOrEqualTo(String value) {
			addCriterion("reviewer_id >=", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdLessThan(String value) {
			addCriterion("reviewer_id <", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdLessThanOrEqualTo(String value) {
			addCriterion("reviewer_id <=", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdLike(String value) {
			addCriterion("reviewer_id like", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdNotLike(String value) {
			addCriterion("reviewer_id not like", value, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdIn(List<String> values) {
			addCriterion("reviewer_id in", values, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdNotIn(List<String> values) {
			addCriterion("reviewer_id not in", values, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdBetween(String value1, String value2) {
			addCriterion("reviewer_id between", value1, value2, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andReviewerIdNotBetween(String value1, String value2) {
			addCriterion("reviewer_id not between", value1, value2, "reviewerId");
			return (Criteria) this;
		}

		public Criteria andStudentIdIsNull() {
			addCriterion("student_id is null");
			return (Criteria) this;
		}

		public Criteria andStudentIdIsNotNull() {
			addCriterion("student_id is not null");
			return (Criteria) this;
		}

		public Criteria andStudentIdEqualTo(String value) {
			addCriterion("student_id =", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdNotEqualTo(String value) {
			addCriterion("student_id <>", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdGreaterThan(String value) {
			addCriterion("student_id >", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdGreaterThanOrEqualTo(String value) {
			addCriterion("student_id >=", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdLessThan(String value) {
			addCriterion("student_id <", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdLessThanOrEqualTo(String value) {
			addCriterion("student_id <=", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdLike(String value) {
			addCriterion("student_id like", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdNotLike(String value) {
			addCriterion("student_id not like", value, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdIn(List<String> values) {
			addCriterion("student_id in", values, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdNotIn(List<String> values) {
			addCriterion("student_id not in", values, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdBetween(String value1, String value2) {
			addCriterion("student_id between", value1, value2, "studentId");
			return (Criteria) this;
		}

		public Criteria andStudentIdNotBetween(String value1, String value2) {
			addCriterion("student_id not between", value1, value2, "studentId");
			return (Criteria) this;
		}

		public Criteria andScoreIsNull() {
			addCriterion("score is null");
			return (Criteria) this;
		}

		public Criteria andScoreIsNotNull() {
			addCriterion("score is not null");
			return (Criteria) this;
		}

		public Criteria andScoreEqualTo(Double value) {
			addCriterion("score =", value, "score");
			return (Criteria) this;
		}

		public Criteria andScoreNotEqualTo(Double value) {
			addCriterion("score <>", value, "score");
			return (Criteria) this;
		}

		public Criteria andScoreGreaterThan(Double value) {
			addCriterion("score >", value, "score");
			return (Criteria) this;
		}

		public Criteria andScoreGreaterThanOrEqualTo(Double value) {
			addCriterion("score >=", value, "score");
			return (Criteria) this;
		}

		public Criteria andScoreLessThan(Double value) {
			addCriterion("score <", value, "score");
			return (Criteria) this;
		}

		public Criteria andScoreLessThanOrEqualTo(Double value) {
			addCriterion("score <=", value, "score");
			return (Criteria) this;
		}

		public Criteria andScoreIn(List<Double> values) {
			addCriterion("score in", values, "score");
			return (Criteria) this;
		}

		public Criteria andScoreNotIn(List<Double> values) {
			addCriterion("score not in", values, "score");
			return (Criteria) this;
		}

		public Criteria andScoreBetween(Double value1, Double value2) {
			addCriterion("score between", value1, value2, "score");
			return (Criteria) this;
		}

		public Criteria andScoreNotBetween(Double value1, Double value2) {
			addCriterion("score not between", value1, value2, "score");
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
	 * This class was generated by MyBatis Generator. This class corresponds to the database table reviewer_score
	 * @mbg.generated  Sun Aug 27 14:21:17 ICT 2023
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
     * This class corresponds to the database table reviewer_score
     *
     * @mbg.generated do_not_delete_during_merge Thu Aug 24 22:38:45 ICT 2023
     */
    public static class Criteria extends GeneratedCriteria {
        protected Criteria() {
            super();
        }
    }
}